import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PaymentRequest {
  email: string;
  amount: number;
  registrationData: {
    name: string;
    email: string;
    phone: string;
    programType: string;
    programName: string;
    amount: number;
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    if (req.method === 'POST') {
      const { email, amount, registrationData }: PaymentRequest = await req.json();
      
      console.log('Processing payment request for:', email, 'Amount:', amount);

      // Créer la transaction Paystack
      const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('PAYSTACK_SECRET_KEY')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: amount * 100, // Paystack utilise les centimes
          currency: 'XOF', // Franc CFA
          callback_url: `${req.headers.get('origin')}/registration-success`,
          metadata: {
            registrationData: JSON.stringify(registrationData)
          }
        }),
      });

      const paystackData = await paystackResponse.json();
      
      if (!paystackData.status) {
        throw new Error(`Erreur Paystack: ${paystackData.message}`);
      }

      console.log('Paystack transaction initialized:', paystackData.data.reference);

      // Créer l'enregistrement en base avec le statut pending
      const { data: registration, error: regError } = await supabaseClient
        .rpc('submit_registration', {
          p_name: registrationData.name,
          p_email: registrationData.email,
          p_phone: registrationData.phone
        });

      if (regError) {
        console.error('Erreur création registration:', regError);
        throw regError;
      }

      // Mettre à jour avec les informations du programme et paiement
      const { error: updateError } = await supabaseClient
        .from('registrations')
        .update({
          program_type: registrationData.programType,
          program_name: registrationData.programName,
          amount: registrationData.amount,
          payment_reference: paystackData.data.reference,
          payment_status: 'pending'
        })
        .eq('id', registration);

      if (updateError) {
        console.error('Erreur mise à jour registration:', updateError);
        throw updateError;
      }

      return new Response(
        JSON.stringify({
          success: true,
          authorization_url: paystackData.data.authorization_url,
          reference: paystackData.data.reference,
          registration_id: registration
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Vérifier le statut du paiement
    if (req.method === 'GET') {
      const url = new URL(req.url);
      const reference = url.searchParams.get('reference');
      
      if (!reference) {
        throw new Error('Reference manquante');
      }

      console.log('Verifying payment for reference:', reference);

      const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
          'Authorization': `Bearer ${Deno.env.get('PAYSTACK_SECRET_KEY')}`,
        },
      });

      const paystackData = await paystackResponse.json();
      
      if (!paystackData.status) {
        throw new Error(`Erreur vérification Paystack: ${paystackData.message}`);
      }

      const paymentStatus = paystackData.data.status === 'success' ? 'completed' : 'failed';
      
      // Mettre à jour le statut du paiement
      const { error: updateError } = await supabaseClient
        .from('registrations')
        .update({
          payment_status: paymentStatus,
          status: paymentStatus === 'completed' ? 'confirmed' : 'failed'
        })
        .eq('payment_reference', reference);

      if (updateError) {
        console.error('Erreur mise à jour statut:', updateError);
        throw updateError;
      }

      // Si paiement réussi, mettre à jour les places occupées et créer le reçu
      if (paymentStatus === 'completed') {
        const registrationData = JSON.parse(paystackData.data.metadata.registrationData);
        
        // Mettre à jour les places occupées
        const { error: capacityError } = await supabaseClient
          .rpc('update_occupied_places', {
            p_program_type: registrationData.programType,
            p_program_name: registrationData.programName
          });

        if (capacityError) {
          console.error('Erreur mise à jour capacité:', capacityError);
        }

        // Récupérer l'ID de l'inscription
        const { data: registration } = await supabaseClient
          .from('registrations')
          .select('id')
          .eq('payment_reference', reference)
          .single();

        if (registration) {
          // Créer le reçu
          const receiptNumber = `FUPA-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
          
          const { error: receiptError } = await supabaseClient
            .from('receipts')
            .insert({
              registration_id: registration.id,
              receipt_number: receiptNumber,
              amount: paystackData.data.amount / 100 // Reconvertir depuis les centimes
            });

          if (receiptError) {
            console.error('Erreur création reçu:', receiptError);
          }
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          status: paymentStatus,
          data: paystackData.data
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });

  } catch (error) {
    console.error('Erreur payment function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});