
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'DE' | 'EN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  // Navigation
  'nav.home': { DE: 'Startseite', EN: 'Home' },
  'nav.partnership': { DE: 'Partnerschaft', EN: 'Partnership' },
  'nav.mitspieler': { DE: 'Mitspieler', EN: 'Team Members' },
  'nav.about': { DE: 'Über uns', EN: 'About Us' },
  'nav.services': { DE: 'Leistungen', EN: 'Services' },
  
  // Footer
  'footer.description': { 
    DE: 'Ihre professionelle Personalagentur für Events, Gastronomie und mehr.',
    EN: 'Your professional staffing agency for events, gastronomy and more.'
  },
  'footer.contact': { DE: 'Kontakt', EN: 'Contact' },
  'footer.legal': { DE: 'Rechtliches', EN: 'Legal' },
  'footer.imprint': { DE: 'Impressum', EN: 'Imprint' },
  'footer.privacy': { DE: 'Datenschutz', EN: 'Privacy Policy' },
  'footer.rights': { DE: 'Alle Rechte vorbehalten.', EN: 'All rights reserved.' },
  
  // About page
  'about.title': { DE: 'Über KAIZEN Personalagentur', EN: 'About KAIZEN Personnel Agency' },
  'about.subtitle': { 
    DE: 'Seit 2018 verbinden wir qualifizierte Fachkräfte mit führenden Unternehmen in der Event- und Gastronomiebranche. Unser Name steht für kontinuierliche Verbesserung und Exzellenz in der Personalvermittlung.',
    EN: 'Since 2018, we have been connecting qualified professionals with leading companies in the event and gastronomy industry. Our name stands for continuous improvement and excellence in personnel placement.'
  },
  'about.mission.title': { DE: 'Unsere Mission', EN: 'Our Mission' },
  'about.mission.text': {
    DE: 'Wir schaffen Brücken zwischen Unternehmen und Talenten. Unsere Mission ist es, durch professionelle Personalvermittlung sowohl Arbeitgebern als auch Arbeitnehmern zu nachhaltigem Erfolg zu verhelfen. Dabei steht Qualität, Vertrauen und Zuverlässigkeit im Mittelpunkt unseres Handelns.',
    EN: 'We build bridges between companies and talents. Our mission is to help both employers and employees achieve sustainable success through professional personnel placement. Quality, trust and reliability are at the center of our actions.'
  },
  'about.vision.title': { DE: 'Unsere Vision', EN: 'Our Vision' },
  'about.vision.text': {
    DE: 'Wir streben danach, die führende Personalagentur in Deutschland zu werden. Durch Innovation, kontinuierliche Weiterentwicklung und einen persönlichen Ansatz wollen wir Standards in der Branche setzen und langfristige Partnerschaften aufbauen, die allen Beteiligten zum Vorteil gereichen.',
    EN: 'We strive to become the leading personnel agency in Germany. Through innovation, continuous development and a personal approach, we want to set standards in the industry and build long-term partnerships that benefit all parties involved.'
  },
  'about.team.title': { DE: 'Unser Team', EN: 'Our Team' },
  'about.team.subtitle': { DE: 'Die Menschen hinter KAIZEN Personalagentur', EN: 'The people behind KAIZEN Personnel Agency' },
  'about.locations.title': { DE: 'Unsere Standorte', EN: 'Our Locations' },
  'about.locations.subtitle': { DE: 'Deutschlandweit für Sie da', EN: 'Available for you nationwide' },
  'about.history.title': { DE: 'Unsere Geschichte', EN: 'Our History' },
  'about.history.subtitle': { DE: 'Von der Gründung bis heute', EN: 'From foundation to today' },
  'about.stats.title': { DE: 'KAIZEN in Zahlen', EN: 'KAIZEN in Numbers' },
  'about.stats.subtitle': { DE: 'Unsere Erfolge sprechen für sich', EN: 'Our successes speak for themselves' },
  'about.stats.employees': { DE: 'Vermittelte Mitarbeiter', EN: 'Placed Employees' },
  'about.stats.experience': { DE: 'Jahre Erfahrung', EN: 'Years of Experience' },
  'about.stats.partners': { DE: 'Partnerunternehmen', EN: 'Partner Companies' },
  'about.stats.satisfaction': { DE: 'Kundenzufriedenheit', EN: 'Customer Satisfaction' },
  
  // Imprint page
  'imprint.title': { DE: 'Impressum', EN: 'Imprint' },
  'imprint.company.title': { DE: 'Angaben gemäß § 5 TMG', EN: 'Information according to § 5 TMG' },
  'imprint.contact.title': { DE: 'Kontakt', EN: 'Contact' },
  'imprint.representative.title': { DE: 'Vertreten durch', EN: 'Represented by' },
  'imprint.representative.text': { DE: 'Geschäftsführer: Max Müller', EN: 'Managing Director: Max Müller' },
  'imprint.registration.title': { DE: 'Registereintrag', EN: 'Register Entry' },
  'imprint.registration.text1': { DE: 'Eintragung im Handelsregister', EN: 'Entry in the commercial register' },
  'imprint.registration.text2': { DE: 'Registergericht: Amtsgericht München', EN: 'Register court: Munich Local Court' },
  'imprint.registration.text3': { DE: 'Registernummer: HRB 234567', EN: 'Register number: HRB 234567' },
  'imprint.vat.title': { DE: 'Umsatzsteuer-ID', EN: 'VAT ID' },
  'imprint.vat.text': {
    DE: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
    EN: 'VAT identification number according to § 27 a of the VAT Act:'
  },
  
  // Privacy page
  'privacy.title': { DE: 'Datenschutzerklärung', EN: 'Privacy Policy' },
  'privacy.intro.title': { DE: 'Einleitung', EN: 'Introduction' },
  'privacy.intro.text': {
    DE: 'Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten.',
    EN: 'With the following privacy policy, we would like to inform you about what types of your personal data (hereinafter also referred to as "data") we process for what purposes and to what extent. The privacy policy applies to all processing of personal data carried out by us.'
  },
  'privacy.controller.title': { DE: 'Verantwortlicher', EN: 'Controller' },
  'privacy.dpo.title': { DE: 'Datenschutzbeauftragter', EN: 'Data Protection Officer' },
  'privacy.dpo.text': {
    DE: 'Bei Fragen zum Datenschutz wenden Sie sich bitte an unseren Datenschutzbeauftragten:',
    EN: 'If you have any questions about data protection, please contact our data protection officer:'
  },
  
  // Bewerbung page
  'application.title': { DE: 'Bewerbungsformular 📝', EN: 'Application Form 📝' },
  'application.subtitle': { DE: 'Starte deine Karriere bei KAIZEN - wir freuen uns auf dich!', EN: 'Start your career at KAIZEN - we look forward to hearing from you!' },
  'application.back': { DE: 'Zurück zu Mitspieler', EN: 'Back to Team Members' },
  'application.personal.title': { DE: 'Persönliche Informationen', EN: 'Personal Information' },
  'application.position': { DE: 'Gewünschte Position', EN: 'Desired Position' },
  'application.position.select': { DE: 'Bitte wählen Sie eine Position', EN: 'Please select a position' },
  'application.position.selected': { DE: 'Ausgewählt:', EN: 'Selected:' },
  'application.firstname': { DE: 'Vorname', EN: 'First Name' },
  'application.lastname': { DE: 'Nachname', EN: 'Last Name' },
  'application.email': { DE: 'E-Mail Adresse', EN: 'Email Address' },
  'application.phone': { DE: 'Telefonnummer', EN: 'Phone Number' },
  'application.address.title': { DE: 'Adresse', EN: 'Address' },
  'application.address.street': { DE: 'Straße und Hausnummer', EN: 'Street and House Number' },
  'application.address.postal': { DE: 'Postleitzahl', EN: 'Postal Code' },
  'application.address.city': { DE: 'Stadt', EN: 'City' },
  'application.motivation': { DE: 'Motivation (Optional)', EN: 'Motivation (Optional)' },
  'application.motivation.placeholder': { DE: 'Erzählen Sie uns, warum Sie bei KAIZEN arbeiten möchten...', EN: 'Tell us why you want to work at KAIZEN...' },
  'application.submit': { DE: 'Bewerbung absenden', EN: 'Submit Application' },
  'application.response': { DE: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen!', EN: 'We will get back to you within 24 hours!' }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('DE');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'DE' ? 'EN' : 'DE');
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
