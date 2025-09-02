import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  department?: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
  name?: string;
}

export const useFormSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (formData: ContactFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: data.message || "Votre message a été envoyé avec succès.",
      });

      return { success: true };
    } catch (error) {
      console.error('Erreur soumission contact:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer votre message. Veuillez réessayer.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  const submitNewsletterForm = async (formData: NewsletterFormData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Inscription réussie !",
        description: data.message || "Vous êtes maintenant inscrit à notre newsletter.",
      });

      return { success: true };
    } catch (error) {
      console.error('Erreur inscription newsletter:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vous inscrire. Veuillez réessayer.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitContactForm,
    submitNewsletterForm,
    isLoading
  };
};