import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Upload,
  CreditCard,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface RegistrationFormData {
  // Informations personnelles
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  gender: string;
  
  // Contact
  email: string;
  phone: string;
  address: string;
  city: string;
  
  // Formation
  programType: string; // licence | master
  program: string;
  sessionYear: string;
  
  // Éducation antérieure
  lastDiploma: string;
  lastSchool: string;
  graduationYear: string;
  
  // Documents
  hasPhoto: boolean;
  hasDiploma: boolean;
  hasTranscripts: boolean;
  hasIdCard: boolean;
  
  // Conditions
  acceptsTerms: boolean;
  acceptsProcessing: boolean;
}

const RegistrationForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    nationality: 'Ivoirienne',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    programType: '',
    program: '',
    sessionYear: '2025-2026',
    lastDiploma: '',
    lastSchool: '',
    graduationYear: '',
    hasPhoto: false,
    hasDiploma: false,
    hasTranscripts: false,
    hasIdCard: false,
    acceptsTerms: false,
    acceptsProcessing: false
  });

  const programs = {
    licence: [
      { value: 'droit', label: 'Licence en Droit', price: 500000 },
      { value: 'economie', label: 'Licence en Économie', price: 500000 },
      { value: 'gestion', label: 'Licence en Gestion', price: 500000 }
    ],
    master: [
      { value: 'droit-prive', label: 'Master en Droit Privé', price: 750000 },
      { value: 'droit-affaires', label: 'Master en Droit des Affaires', price: 750000 },
      { value: 'economie-appliquee', label: 'Master en Économie Appliquée', price: 750000 },
      { value: 'gestion-entreprises', label: 'Master en Gestion des Entreprises', price: 750000 }
    ]
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentPrograms = () => {
    if (!formData.programType) return [];
    return programs[formData.programType as keyof typeof programs] || [];
  };

  const getSelectedProgramPrice = () => {
    const currentPrograms = getCurrentPrograms();
    const selectedProgram = currentPrograms.find(p => p.value === formData.program);
    return selectedProgram?.price || 0;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.dateOfBirth && 
                 formData.placeOfBirth && formData.gender && formData.nationality);
      case 2:
        return !!(formData.email && formData.phone && formData.address && formData.city);
      case 3:
        return !!(formData.programType && formData.program);
      case 4:
        return !!(formData.lastDiploma && formData.lastSchool && formData.graduationYear);
      case 5:
        return formData.hasPhoto && formData.hasDiploma && formData.hasTranscripts && formData.hasIdCard;
      case 6:
        return formData.acceptsTerms && formData.acceptsProcessing;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
    } else {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(6)) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs et accepter les conditions",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Intégrer Paystack ici
      toast({
        title: "Inscription en cours",
        description: "Redirection vers la page de paiement...",
      });
      
      // Simulation pour l'instant
      setTimeout(() => {
        setCurrentStep(7);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error('Erreur inscription:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Informations Personnelles</h3>
              <p className="text-muted-foreground">Renseignez vos informations de base</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date de naissance *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Lieu de naissance *</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => updateFormData('placeOfBirth', e.target.value)}
                  placeholder="Ville, Pays"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Genre *</Label>
                <RadioGroup 
                  value={formData.gender} 
                  onValueChange={(value) => updateFormData('gender', value)}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="homme" id="homme" />
                    <Label htmlFor="homme">Homme</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="femme" id="femme" />
                    <Label htmlFor="femme">Femme</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="nationality">Nationalité *</Label>
                <Select value={formData.nationality} onValueChange={(value) => updateFormData('nationality', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ivoirienne">Ivoirienne</SelectItem>
                    <SelectItem value="Française">Française</SelectItem>
                    <SelectItem value="Malienne">Malienne</SelectItem>
                    <SelectItem value="Burkinabé">Burkinabé</SelectItem>
                    <SelectItem value="Sénégalaise">Sénégalaise</SelectItem>
                    <SelectItem value="Autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Informations de Contact</h3>
              <p className="text-muted-foreground">Comment vous contacter</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="+225 XX XX XX XX XX"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Adresse complète *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                placeholder="Votre adresse complète"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="city">Ville *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder="Votre ville"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Formation Souhaitée</h3>
              <p className="text-muted-foreground">Choisissez votre programme d'études</p>
            </div>

            <div>
              <Label>Type de formation *</Label>
              <RadioGroup 
                value={formData.programType} 
                onValueChange={(value) => {
                  updateFormData('programType', value);
                  updateFormData('program', ''); // Reset program selection
                }}
                className="grid md:grid-cols-2 gap-4 mt-2"
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="licence" id="licence" />
                  <Label htmlFor="licence" className="cursor-pointer flex-1">
                    <div>
                      <div className="font-semibold">Licence (BAC+3)</div>
                      <div className="text-sm text-muted-foreground">Formation de 3 ans</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="master" id="master" />
                  <Label htmlFor="master" className="cursor-pointer flex-1">
                    <div>
                      <div className="font-semibold">Master (BAC+5)</div>
                      <div className="text-sm text-muted-foreground">Formation de 2 ans</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.programType && (
              <div>
                <Label htmlFor="program">Programme spécifique *</Label>
                <Select value={formData.program} onValueChange={(value) => updateFormData('program', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisissez votre programme" />
                  </SelectTrigger>
                  <SelectContent>
                    {getCurrentPrograms().map((program) => (
                      <SelectItem key={program.value} value={program.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{program.label}</span>
                          <Badge variant="secondary" className="ml-2">
                            {formatPrice(program.price)}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="sessionYear">Année académique *</Label>
              <Select value={formData.sessionYear} onValueChange={(value) => updateFormData('sessionYear', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-2026">2025-2026</SelectItem>
                  <SelectItem value="2026-2027">2026-2027</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.program && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Frais d'inscription</h4>
                      <p className="text-sm text-muted-foreground">Pour l'année {formData.sessionYear}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(getSelectedProgramPrice())}
                      </div>
                      <div className="text-sm text-muted-foreground">par an</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Formation Antérieure</h3>
              <p className="text-muted-foreground">Vos études précédentes</p>
            </div>

            <div>
              <Label htmlFor="lastDiploma">Dernier diplôme obtenu *</Label>
              <Select value={formData.lastDiploma} onValueChange={(value) => updateFormData('lastDiploma', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre diplôme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baccalaureat">Baccalauréat</SelectItem>
                  <SelectItem value="licence">Licence</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="autre">Autre diplôme</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="lastSchool">Établissement d'origine *</Label>
              <Input
                id="lastSchool"
                value={formData.lastSchool}
                onChange={(e) => updateFormData('lastSchool', e.target.value)}
                placeholder="Nom de votre dernier établissement"
              />
            </div>

            <div>
              <Label htmlFor="graduationYear">Année d'obtention *</Label>
              <Select value={formData.graduationYear} onValueChange={(value) => updateFormData('graduationYear', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Année" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Documents Requis</h3>
              <p className="text-muted-foreground">Confirmez que vous avez tous les documents</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Liste des documents à fournir</CardTitle>
                <CardDescription>
                  Veuillez confirmer que vous disposez de tous ces documents. Vous devrez les soumettre après validation de votre inscription.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasPhoto" 
                    checked={formData.hasPhoto}
                    onCheckedChange={(checked) => updateFormData('hasPhoto', checked)}
                  />
                  <Label htmlFor="hasPhoto" className="flex-1">
                    Photo d'identité récente (format passeport)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasDiploma" 
                    checked={formData.hasDiploma}
                    onCheckedChange={(checked) => updateFormData('hasDiploma', checked)}
                  />
                  <Label htmlFor="hasDiploma" className="flex-1">
                    Copie légalisée du dernier diplôme obtenu
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasTranscripts" 
                    checked={formData.hasTranscripts}
                    onCheckedChange={(checked) => updateFormData('hasTranscripts', checked)}
                  />
                  <Label htmlFor="hasTranscripts" className="flex-1">
                    Relevés de notes des 3 dernières années
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="hasIdCard" 
                    checked={formData.hasIdCard}
                    onCheckedChange={(checked) => updateFormData('hasIdCard', checked)}
                  />
                  <Label htmlFor="hasIdCard" className="flex-1">
                    Copie de la pièce d'identité (CNI ou Passeport)
                  </Label>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Important :</p>
                  <p>Ces documents devront être fournis physiquement lors de votre première visite à FUPA pour finaliser votre inscription.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary">Récapitulatif et Conditions</h3>
              <p className="text-muted-foreground">Vérifiez vos informations avant de procéder au paiement</p>
            </div>

            {/* Récapitulatif */}
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif de votre inscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Nom complet :</span> {formData.firstName} {formData.lastName}
                  </div>
                  <div>
                    <span className="font-semibold">Email :</span> {formData.email}
                  </div>
                  <div>
                    <span className="font-semibold">Formation :</span> {getCurrentPrograms().find(p => p.value === formData.program)?.label}
                  </div>
                  <div>
                    <span className="font-semibold">Année :</span> {formData.sessionYear}
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total à payer :</span>
                  <span className="text-primary">{formatPrice(getSelectedProgramPrice())}</span>
                </div>
              </CardContent>
            </Card>

            {/* Conditions */}
            <Card>
              <CardHeader>
                <CardTitle>Conditions d'inscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="acceptsTerms" 
                    checked={formData.acceptsTerms}
                    onCheckedChange={(checked) => updateFormData('acceptsTerms', checked)}
                  />
                  <Label htmlFor="acceptsTerms" className="text-sm leading-relaxed">
                    J'accepte les <a href="/legal-notice" className="text-primary hover:underline">conditions générales</a> et le <a href="/legal-notice" className="text-primary hover:underline">règlement intérieur</a> de FUPA
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="acceptsProcessing" 
                    checked={formData.acceptsProcessing}
                    onCheckedChange={(checked) => updateFormData('acceptsProcessing', checked)}
                  />
                  <Label htmlFor="acceptsProcessing" className="text-sm leading-relaxed">
                    J'autorise FUPA à traiter mes données personnelles conformément à la <a href="/privacy-policy" className="text-primary hover:underline">politique de confidentialité</a>
                  </Label>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="text-sm text-green-800">
                  <p className="font-semibold mb-1">Prêt pour le paiement</p>
                  <p>Cliquez sur "Procéder au paiement" pour finaliser votre inscription via Paystack.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto" />
            <div>
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">Inscription Réussie !</h3>
              <p className="text-xl text-muted-foreground">
                Félicitations ! Votre inscription à FUPA a été validée.
              </p>
            </div>
            
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="text-left space-y-2">
                  <div className="flex justify-between">
                    <span>Numéro d'inscription :</span>
                    <span className="font-semibold">FUPA-2025-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formation :</span>
                    <span className="font-semibold">{getCurrentPrograms().find(p => p.value === formData.program)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Montant payé :</span>
                    <span className="font-semibold text-green-600">{formatPrice(getSelectedProgramPrice())}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Prochaines étapes :</h4>
              <ul className="text-left text-sm space-y-1">
                <li>• Vous recevrez un email de confirmation dans les prochaines minutes</li>
                <li>• Préparez vos documents originaux pour la validation</li>
                <li>• Rendez-vous à FUPA avec vos documents dans les 7 jours</li>
                <li>• Suivez nos réseaux sociaux pour les dernières actualités</li>
              </ul>
            </div>

            <Button onClick={() => window.location.href = '/'} className="btn-academic">
              Retour à l'accueil
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = (step: number) => {
    const titles = [
      '', 
      'Informations personnelles',
      'Contact', 
      'Formation',
      'Éducation',
      'Documents',
      'Confirmation',
      'Succès'
    ];
    return titles[step] || '';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-academic text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Inscription à FUPA
          </h1>
          <p className="text-xl text-white/90">
            Rejoignez l'excellence académique - Inscription en ligne sécurisée
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {currentStep < 7 && (
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Étape {currentStep} sur 6
              </span>
              <span className="text-sm font-medium text-primary">
                {getStepTitle(currentStep)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              {renderStep()}
              
              {/* Navigation Buttons */}
              {currentStep < 7 && (
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Précédent
                  </Button>
                  
                  {currentStep < 6 ? (
                    <Button onClick={nextStep} className="btn-academic">
                      Suivant
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit} 
                      disabled={isSubmitting || !validateStep(6)}
                      className="btn-academic"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Traitement...' : 'Procéder au paiement'}
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationForm;