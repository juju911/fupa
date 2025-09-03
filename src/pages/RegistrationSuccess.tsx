import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Download, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const RegistrationSuccess = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [receiptData, setReceiptData] = useState<any>(null);

  const reference = searchParams.get('reference');

  useEffect(() => {
    if (reference) {
      verifyPayment();
    } else {
      setIsLoading(false);
    }
  }, [reference]);

  const verifyPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('paystack-payment', {
        method: 'GET',
        body: new URLSearchParams({ reference: reference! })
      });

      if (error) throw error;

      if (data.success) {
        setPaymentData(data.data);
        // Récupérer les informations du reçu
        await fetchReceiptData();
      }
    } catch (error) {
      console.error('Erreur vérification paiement:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vérifier le statut du paiement",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReceiptData = async () => {
    try {
      const { data: registration } = await supabase
        .from('registrations')
        .select('id, name, email, program_name, amount')
        .eq('payment_reference', reference)
        .single();

      if (registration) {
        const { data: receipt } = await supabase
          .from('receipts')
          .select('*')
          .eq('registration_id', registration.id)
          .single();

        setReceiptData({ ...registration, receipt });
      }
    } catch (error) {
      console.error('Erreur récupération reçu:', error);
    }
  };

  const downloadReceipt = async () => {
    if (!receiptData || !receiptData.receipt) {
      toast({
        title: "Erreur",
        description: "Aucun reçu disponible",
        variant: "destructive",
      });
      return;
    }

    try {
      const receiptContent = `
FACULTÉS UNIVERSITAIRES PRIVÉES D'ABIDJAN (FUPA)
Reçu de paiement

===========================================

Numéro de reçu: ${receiptData.receipt.receipt_number}
Date de paiement: ${new Date(receiptData.receipt.payment_date).toLocaleDateString('fr-FR')}
Référence Paystack: ${reference}

INFORMATIONS ÉTUDIANT
Nom: ${receiptData.name}
Email: ${receiptData.email}

FORMATION
Programme: ${receiptData.program_name}
Année académique: 2025-2026

PAIEMENT
Montant: ${new Intl.NumberFormat('fr-FR').format(receiptData.amount)} FCFA
Statut: Payé

===========================================

Ce reçu atteste du paiement des frais d'inscription 
pour l'année académique 2025-2026.

Les documents originaux devront être fournis lors 
de votre première visite à FUPA pour finaliser 
votre inscription.

CONTACT FUPA
Adresse: 2 Plateaux Aghien, Carrefour Opéra – Abidjan
Téléphone: +225 27 22 52 35 27
Email: contact@fupa-edu.com
Site web: www.fupa-edu.com

Merci de votre confiance !
      `;

      const blob = new Blob([receiptContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `recu_fupa_${receiptData.receipt.receipt_number}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Téléchargement réussi",
        description: "Votre reçu a été téléchargé",
      });
    } catch (error) {
      console.error('Erreur téléchargement reçu:', error);
      toast({
        title: "Erreur",
        description: "Impossible de télécharger le reçu",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Vérification du paiement en cours...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!reference || !paymentData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paiement non trouvé</h3>
              <p className="text-muted-foreground mb-4">
                Aucune référence de paiement valide n'a été trouvée.
              </p>
              <Button onClick={() => window.location.href = '/'}>
                Retour à l'accueil
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const isPaymentSuccess = paymentData.status === 'success';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {isPaymentSuccess ? (
              <>
                <CheckCircle className="h-20 w-20 text-green-600 mx-auto" />
                <div>
                  <h1 className="text-4xl font-heading font-bold text-primary mb-2">
                    Inscription Réussie !
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Félicitations ! Votre inscription à FUPA a été validée avec succès.
                  </p>
                </div>
                
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>Détails de votre inscription</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Référence :</span>
                      <span className="font-semibold">{reference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Montant :</span>
                      <span className="font-semibold text-green-600">
                        {new Intl.NumberFormat('fr-FR').format(paymentData.amount / 100)} FCFA
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date :</span>
                      <span className="font-semibold">
                        {new Date(paymentData.paid_at).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Statut :</span>
                      <span className="font-semibold text-green-600">Confirmé</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4 justify-center">
                  <Button onClick={downloadReceipt} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger le reçu
                  </Button>
                  <Button onClick={() => window.location.href = '/'} className="btn-academic">
                    Retour à l'accueil
                  </Button>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3 text-blue-800">Prochaines étapes :</h4>
                    <ul className="text-left text-sm space-y-2 text-blue-700">
                      <li>• Vous recevrez un email de confirmation dans les prochaines minutes</li>
                      <li>• Préparez vos documents originaux pour la validation</li>
                      <li>• Rendez-vous à FUPA avec vos documents dans les 7 jours ouvrables</li>
                      <li>• Adresse : 2 Plateaux Aghien, Carrefour Opéra – Abidjan</li>
                      <li>• Horaires : Lundi-Vendredi 8h-17h, Samedi 8h-12h</li>
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <AlertCircle className="h-20 w-20 text-red-600 mx-auto" />
                <div>
                  <h1 className="text-4xl font-heading font-bold text-red-600 mb-2">
                    Paiement échoué
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Malheureusement, votre paiement n'a pas pu être traité.
                  </p>
                </div>
                
                <Card className="max-w-md mx-auto border-red-200">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Référence :</span>
                        <span className="font-semibold">{reference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Statut :</span>
                        <span className="font-semibold text-red-600">Échoué</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => window.location.href = '/registration'} className="btn-academic">
                    Réessayer l'inscription
                  </Button>
                  <Button onClick={() => window.location.href = '/'} variant="outline">
                    Retour à l'accueil
                  </Button>
                </div>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-6 text-left">
                    <h4 className="font-semibold mb-3 text-yellow-800">Que faire maintenant ?</h4>
                    <ul className="text-sm space-y-2 text-yellow-700">
                      <li>• Vérifiez les informations de votre carte bancaire</li>
                      <li>• Assurez-vous d'avoir suffisamment de fonds</li>
                      <li>• Contactez votre banque si le problème persiste</li>
                      <li>• Ou contactez-nous au +225 27 22 52 35 27</li>
                    </ul>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationSuccess;