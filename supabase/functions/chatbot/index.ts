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
- Réseaux sociaux: Facebook (fupaabidjan), Twitter (Fupa_Abidjan), TikTok (@fupa.abidjan)

FORMATIONS DÉTAILLÉES:

LICENCES (3 ans):
- Licence en Droit
- Licence en Économie
- Licence en Gestion
Conditions: Baccalauréat ou équivalent
Frais de scolarité: 350 000 FCFA par année académique

MASTERS (2 ans):
- Master en Droit privé
- Master en Droit des affaires
- Master en Économie appliquée
- Master en Gestion des entreprises
Conditions: Licence ou équivalent
Frais de scolarité: 450 000 FCFA par année académique

FORMATION CONTINUE:
- Programmes courts et formations spécialisées pour professionnels
- Certificats en partenariat avec institutions académiques locales et internationales
- Formations sur mesure pour entreprises

PROCÉDURE D'INSCRIPTION COMPLÈTE:
1. Remplir le formulaire d'inscription en ligne: https://www.fupa-edu.com/inscription
2. Documents requis:
   - Bulletins de notes (BAC et/ou relevés universitaires)
   - Diplômes (BAC, Licence selon le niveau)
   - Photocopie pièce d'identité (CNI, passeport)
   - Photos d'identité (4x4)
   - Certificat médical
   - Acte de naissance
3. Paiement des frais de scolarité selon modalités:
   - Paiement total à l'inscription avec réduction de 5%
   - Paiement en 2 tranches (50% à l'inscription, 50% en janvier)
   - Paiement en 3 tranches (40% inscription, 30% janvier, 30% avril)

CONDITIONS D'ADMISSION:
- Nouveaux bacheliers: Baccalauréat toutes séries
- Transferts: Possibilité de passerelles depuis autres établissements
- Équivalences: Selon cursus antérieur et évaluation du dossier
- Étudiants internationaux: Équivalence du baccalauréat + niveau français B1

FRAIS DE SCOLARITÉ 2025-2026:
- Licence (L1, L2, L3): 350 000 FCFA/an
- Master (M1, M2): 450 000 FCFA/an
- Frais d'inscription: 25 000 FCFA (non remboursables)
- Assurance étudiante: 15 000 FCFA/an

VIE ÉTUDIANTE:
- Clubs et associations: culturels, sportifs, scientifiques
- Activités: colloques, séminaires, sorties pédagogiques, événements culturels
- Bibliothèque moderne avec ressources numériques
- Espaces de travail collaboratif
- Restaurant universitaire
- Réseau alumni actif

L'ÉQUIPE:
- Direction: Directeur Général Prof. Dr. Kouamé N'Guessan
- Enseignants-chercheurs spécialisés par domaine
- Personnel administratif dédié à l'accompagnement des étudiants

ACTUALITÉS RÉCENTES:
- Inscriptions 2025-2026 ouvertes
- Journées portes ouvertes
- Colloques et séminaires académiques
- Soutenances de fin de semestre

MISSION: Fournir une formation supérieure de qualité, accompagner les étudiants dans leur parcours académique et professionnel, promouvoir l'excellence et l'innovation
VISION: Être un établissement de référence en Côte d'Ivoire et en Afrique pour l'enseignement supérieur privé
VALEURS: Excellence, discipline, innovation, ouverture internationale, accompagnement personnalisé

CONTACT:
- Adresse: 2 Plateaux Aghien, Carrefour Opéra – Abidjan
- Téléphone: +225 27 22 52 35 27
- Email: contact@fupa-edu.com
- Site web: www.fupa-edu.com
- Formulaire d'inscription: https://www.fupa-edu.com/inscription
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

INSTRUCTIONS CRITIQUES:
1. Réponds UNIQUEMENT en français avec un style professionnel, clair et accueillant
2. Base tes réponses sur les informations officielles FUPA ci-dessus
3. Structure tes réponses de manière claire et concise
4. OBLIGATION: Pour toute question concernant les inscriptions, la scolarité ou les frais, TOUJOURS inclure le lien direct: https://www.fupa-edu.com/inscription
5. Donne des informations précises sur:
   - Les formations disponibles (Licences, Masters, Formation continue)
   - Les frais de scolarité exacts par formation
   - Le processus d'inscription complet avec documents requis
   - Les modalités de paiement
   - Les conditions d'admission
6. Si on te pose une question hors du domaine de FUPA, redirige poliment vers les informations FUPA
7. Encourage le contact direct: contact@fupa-edu.com ou +225 27 22 52 35 27

RÈGLES DE RÉPONSE AUTOMATIQUES:
- Question sur inscription/frais → Inclure OBLIGATOIREMENT le lien https://www.fupa-edu.com/inscription
- Question sur formations → Donner détails complets + frais + conditions
- Question sur documents → Lister tous les documents requis
- Question générale → Orienter vers informations spécifiques FUPA

Exemples de réponses OBLIGATOIRES:
- Formations: "FUPA propose des Licences (Droit, Économie, Gestion) à 350 000 FCFA/an et des Masters (Droit privé, Droit des affaires, Économie appliquée, Gestion des entreprises) à 450 000 FCFA/an..."
- Inscription: "Pour vous inscrire à FUPA, remplissez notre formulaire en ligne: https://www.fupa-edu.com/inscription. Vous aurez besoin de..."
- Frais: "Les frais de scolarité pour [formation] sont de [montant exact] FCFA/an. Inscrivez-vous directement: https://www.fupa-edu.com/inscription"`;

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
        max_tokens: 600,
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