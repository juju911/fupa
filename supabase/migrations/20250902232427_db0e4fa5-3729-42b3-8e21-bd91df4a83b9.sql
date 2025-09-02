-- Fix security issues with registrations table
-- 1. Remove duplicate and conflicting policies
DROP POLICY IF EXISTS "Only authenticated admins can view registrations" ON public.registrations;
DROP POLICY IF EXISTS "public_registrations_insert" ON public.registrations;
DROP POLICY IF EXISTS "secure_registrations_select" ON public.registrations;

-- 2. Create secure policies
-- Only admins can view registration data (SELECT)
CREATE POLICY "admins_can_view_registrations" 
ON public.registrations 
FOR SELECT 
TO authenticated
USING (public.is_admin());

-- Only admins can manage registrations (INSERT, UPDATE, DELETE)
CREATE POLICY "admins_can_insert_registrations" 
ON public.registrations 
FOR INSERT 
TO authenticated
WITH CHECK (public.is_admin());

CREATE POLICY "admins_can_update_registrations" 
ON public.registrations 
FOR UPDATE 
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

CREATE POLICY "admins_can_delete_registrations" 
ON public.registrations 
FOR DELETE 
TO authenticated
USING (public.is_admin());

-- 3. Create a public function for secure registration submission
-- This allows public registration without exposing sensitive data
CREATE OR REPLACE FUNCTION public.submit_registration(
  p_name TEXT,
  p_email TEXT,
  p_phone TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;