-- CORRECTION CRITIQUE : Sécuriser la table contact_rate_limit
-- Supprimer la politique publique dangereuse
DROP POLICY IF EXISTS "Rate limit is public" ON public.contact_rate_limit;

-- Créer des politiques restrictives admin-seulement
CREATE POLICY "Admins can view contact rate limits" ON public.contact_rate_limit
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can manage contact rate limits" ON public.contact_rate_limit
FOR INSERT 
WITH CHECK (is_admin());

CREATE POLICY "Admins can update contact rate limits" ON public.contact_rate_limit
FOR UPDATE 
USING (is_admin())
WITH CHECK (is_admin());

CREATE POLICY "Admins can delete contact rate limits" ON public.contact_rate_limit
FOR DELETE 
USING (is_admin());

-- Ajouter une politique pour permettre aux edge functions (avec service role) d'accéder
-- Les edge functions utilisent le service role key qui bypasse RLS par défaut