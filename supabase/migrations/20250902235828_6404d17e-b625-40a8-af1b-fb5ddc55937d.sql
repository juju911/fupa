-- Modifier la table registrations pour inclure les nouveaux champs
ALTER TABLE public.registrations 
ADD COLUMN program_type text,
ADD COLUMN program_name text,
ADD COLUMN amount numeric(10,2),
ADD COLUMN payment_reference text,
ADD COLUMN payment_status text DEFAULT 'pending',
ADD COLUMN documents_verified boolean DEFAULT false;

-- Créer une table pour gérer les places disponibles par programme
CREATE TABLE public.program_capacity (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_type text NOT NULL, -- 'licence' ou 'master'
  program_name text NOT NULL,
  total_places integer NOT NULL,
  occupied_places integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS pour program_capacity
ALTER TABLE public.program_capacity ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour program_capacity
CREATE POLICY "Anyone can view program capacity" 
ON public.program_capacity 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage program capacity" 
ON public.program_capacity 
FOR ALL 
USING (is_admin())
WITH CHECK (is_admin());

-- Insérer les données initiales pour les programmes
INSERT INTO public.program_capacity (program_type, program_name, total_places, occupied_places) VALUES
('licence', 'Droit', 100, 0),
('licence', 'Économie', 80, 0),
('licence', 'Gestion', 90, 0),
('master', 'Droit privé', 40, 0),
('master', 'Droit des affaires', 35, 0),
('master', 'Économie appliquée', 30, 0),
('master', 'Gestion des entreprises', 45, 0);

-- Créer un trigger pour mettre à jour updated_at
CREATE TRIGGER update_program_capacity_updated_at
BEFORE UPDATE ON public.program_capacity
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Créer une table pour les reçus
CREATE TABLE public.receipts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id uuid NOT NULL REFERENCES public.registrations(id) ON DELETE CASCADE,
  receipt_number text NOT NULL UNIQUE,
  amount numeric(10,2) NOT NULL,
  payment_date timestamp with time zone NOT NULL DEFAULT now(),
  pdf_data text, -- Base64 encoded PDF data
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS pour receipts
ALTER TABLE public.receipts ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour receipts
CREATE POLICY "Admins can view all receipts" 
ON public.receipts 
FOR SELECT 
USING (is_admin());