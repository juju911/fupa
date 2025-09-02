import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Knowledge base about FUPA
const fupaKnowledgeBase = `
FUPA - Facultés Universitaires Privées d'Abidjan

INFORMATIONS GÉNÉRALES:
- Nom: Facultés Universitaires Privées d'Abidjan (FUPA)
- Adresse: 2 Plateaux Aghien, Carrefour Opéra – Abidjan, Côte d'Ivoire
- Téléphone: +225 27 22 52 35 27
- Email: contact@fupa-edu.com
- Site web: www.fupa-edu.com

FORMATIONS:
Licences: Droit, Économie, Gestion
Masters: Droit privé, Droit des affaires, Économie appliquée, Gestion des entreprises
Formation continue et certificats

ADMISSION:
- Nouveaux bacheliers acceptés
- Passerelles possibles pour étudiants d'autres établissements
- Équivalences selon cursus antérieur
- Procédure: formulaire en ligne, documents requis, paiement frais

VIE ÉTUDIANTE:
- Clubs et associations culturels, sportifs, scientifiques
- Colloques, séminaires, sorties pédagogiques
- Événements culturels réguliers

MISSION: Fournir une formation supérieure de qualité, accompagner les étudiants dans leur parcours académique et professionnel
VISION: Être un établissement de référence en Côte d'Ivoire et en Afrique
VALEURS: Excellence, discipline, innovation, ouverture internationale, accompagnement personnalisé
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId } = await req.json();
    
    if (!message) {
      return new Response(JSON.stringify({ error: 'Message requis' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY not found');
      return new Response(JSON.stringify({ error: 'Configuration API manquante' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize Supabase client for saving chat history
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Prepare the system prompt with FUPA knowledge
    const systemPrompt = `Tu es l'assistant virtuel officiel de FUPA (Facultés Universitaires Privées d'Abidjan). 

VOICI LES INFORMATIONS OFFICIELLES SUR FUPA:
${fupaKnowledgeBase}

INSTRUCTIONS:
1. Réponds UNIQUEMENT en français
2. Sois professionnel, courtois et informatif
3. Base tes réponses sur les informations officielles FUPA ci-dessus
4. Si on te pose une question hors du domaine de FUPA, redirige poliment vers les informations FUPA
5. Encourage les visiteurs à contacter FUPA pour plus d'informations: contact@fupa-edu.com ou +225 27 22 52 35 27
6. Pour les admissions, encourage à remplir le formulaire sur le site
7. Sois chaleureux et accueillant comme un vrai représentant de l'université

Exemples de réponses:
- Pour les formations: "FUPA propose des licences en Droit, Économie et Gestion, ainsi que des Masters..."
- Pour l'admission: "Pour vous inscrire à FUPA, vous pouvez remplir notre formulaire en ligne ou nous contacter..."
- Pour la vie étudiante: "La vie à FUPA est riche avec de nombreux clubs et associations..."`;

    // Call OpenAI API with GPT-4o-mini
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', await response.text());
      return new Response(JSON.stringify({ error: 'Erreur du service IA' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Save chat history to database
    if (sessionId) {
      await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          message: message,
          response: aiResponse
        });
    }

    return new Response(JSON.stringify({ 
      response: aiResponse,
      sessionId: sessionId || crypto.randomUUID()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: 'Désolé, une erreur est survenue. Veuillez réessayer.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});