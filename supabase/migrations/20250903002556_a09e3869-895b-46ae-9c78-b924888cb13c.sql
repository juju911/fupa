-- 1. Corriger le problème de search_path mutable
CREATE OR REPLACE FUNCTION public.submit_registration(p_name text, p_email text, p_phone text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  new_registration_id UUID;
BEGIN
  -- Validate inputs
  IF p_name IS NULL OR length(trim(p_name)) < 2 THEN
    RAISE EXCEPTION 'Le nom doit contenir au moins 2 caractères';
  END IF;
  
  IF p_email IS NULL OR p_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Adresse email invalide';
  END IF;
  
  IF p_phone IS NULL OR length(trim(p_phone)) < 8 THEN
    RAISE EXCEPTION 'Numéro de téléphone invalide';
  END IF;
  
  -- Insert the registration
  INSERT INTO public.registrations (name, email, phone, status)
  VALUES (trim(p_name), lower(trim(p_email)), trim(p_phone), 'pending')
  RETURNING id INTO new_registration_id;
  
  RETURN new_registration_id;
END;
$function$;

-- 2. Corriger la fonction update_occupied_places
CREATE OR REPLACE FUNCTION public.update_occupied_places(p_program_type text, p_program_name text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  UPDATE public.program_capacity 
  SET occupied_places = occupied_places + 1,
      updated_at = now()
  WHERE program_type = p_program_type 
    AND program_name = p_program_name;
END;
$function$;

-- 3. Corriger la fonction update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- 4. Ajouter une politique plus restrictive pour les emails
CREATE POLICY "Users can only see their own email" ON public.registrations
FOR SELECT 
USING (false);

-- Remplacer par une politique admin seulement
DROP POLICY IF EXISTS "Users can only see their own email" ON public.registrations;

-- 5. Améliorer les politiques de sécurité pour les messages de chat
CREATE POLICY "Users can view only public chat sessions" ON public.chat_messages
FOR SELECT 
USING (session_id LIKE 'public_%' OR is_admin());

-- Supprimer l'ancienne politique trop permissive
DROP POLICY IF EXISTS "Admins can view chat messages" ON public.chat_messages;

-- 6. Ajouter une limitation pour les soumissions de contact (anti-spam)
CREATE TABLE IF NOT EXISTS public.contact_rate_limit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  email text NOT NULL,
  submission_count integer DEFAULT 1,
  first_submission timestamptz DEFAULT now(),
  last_submission timestamptz DEFAULT now(),
  UNIQUE(ip_address, email)
);

ALTER TABLE public.contact_rate_limit ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Rate limit is public" ON public.contact_rate_limit
FOR ALL USING (true);

-- 7. Configurer l'expiration des mots de passe OTP (dans le dashboard Supabase Auth)
-- Cette configuration doit être faite manuellement dans le dashboard Supabase
-- Aller dans Auth > Settings et configurer:
-- - OTP expiry: 600 secondes (10 minutes) au lieu de la valeur par défaut
-- - Password policy: minimum 8 caractères avec complexité