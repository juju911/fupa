import { supabase } from '@/integrations/supabase/client';

export const setupNewsletterForm = () => {
  // Newsletter form handler
  const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
      const submitButton = newsletterForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      
      if (!emailInput.value) {
        alert('Veuillez entrer votre adresse email');
        return;
      }

      // Disable button during submission
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Inscription...';
      submitButton.disabled = true;

      try {
        const { data, error } = await supabase.functions.invoke('newsletter', {
          body: {
            email: emailInput.value
          }
        });

        if (error) throw error;

        alert('Inscription réussie ! Merci de nous avoir rejoint.');
        emailInput.value = '';
      } catch (error) {
        console.error('Erreur inscription newsletter:', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
};

// Auto-setup when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNewsletterForm);
  } else {
    setupNewsletterForm();
  }
}