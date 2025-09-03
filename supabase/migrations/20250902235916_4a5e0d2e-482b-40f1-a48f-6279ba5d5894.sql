-- Créer une fonction pour mettre à jour les places occupées
CREATE OR REPLACE FUNCTION public.update_occupied_places(p_program_type text, p_program_name text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.program_capacity 
  SET occupied_places = occupied_places + 1,
      updated_at = now()
  WHERE program_type = p_program_type 
    AND program_name = p_program_name;
END;
$$;