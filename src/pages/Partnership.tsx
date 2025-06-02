import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Clock, Award, Star, Mail, Phone, MapPin, Send, Building, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Partnership = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    needs: '',
    message: ''
  });

  useEffect(() => {
    // Check if we need to scroll to contact section
    const hash = window.location.hash;
    if (hash === '#contact') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    alert('Vielen Dank für Ihr Interesse! Wir melden uns bald bei Ihnen.');
  };

  const content = {
    DE: {
      title: "Partnerschaft",
      subtitle: "Werden Sie unser Partner und profitieren Sie von erstklassigem Personal für Ihre Events, Restaurants und Hotels. Gemeinsam schaffen wir außergewöhnliche Erlebnisse.",
      becomePartner: "Partner werden",
      whyKaizen: "Warum KAIZEN als Partner?",
      advantagesSubtitle: "Ihre Vorteile einer Partnerschaft mit uns",
      benefits: [
        {
          title: "Qualifizierte Fachkräfte",
          description: "Zugang zu unserem Pool von über 2500 geprüften und erfahrenen Arbeitskräften"
        },
        {
          title: "Schnelle Verfügbarkeit",
          description: "Kurzfristige Personalvermittlung innerhalb von 24-48 Stunden möglich"
        },
        {
          title: "Garantierte Qualität",
          description: "Alle unsere Mitarbeiter sind vorab geschult und haben nachgewiesene Erfahrung"
        },
        {
          title: "Zuverlässiger Service",
          description: "98% Kundenzufriedenheit und langjährige Partnerschaften sprechen für uns"
        }
      ],
      servicesTitle: "Unsere Services",
      servicesSubtitle: "Maßgeschneiderte Personallösungen für Ihren Bedarf",
      services: [
        "Event-Personal für Messen und Kongresse",
        "Service-Kräfte für Restaurants und Hotels",
        "Barkeeper und Cocktail-Service",
        "Küchenhilfen und Köche",
        "Logistik- und Lagerpersonal",
        "Temporäre Verstärkung für Spitzenzeiten"
      ],
      testimonialsTitle: "Was unsere Partner sagen",
      testimonialsSubtitle: "Erfahrungen erfolgreicher Partnerschaften",
      testimonials: [
        {
          name: "Hotel Adlon Kempinski",
          location: "Berlin",
          text: "KAIZEN hat uns dabei geholfen, kurzfristig qualifiziertes Personal für unsere Events zu finden. Absolut zuverlässig!"
        },
        {
          name: "Restaurant Zur Letzten Instanz",
          location: "Berlin",
          text: "Dank KAIZEN konnten wir unseren Personalmangel schnell beheben. Die Qualität der Arbeitskräfte ist hervorragend."
        },
        {
          name: "Maritim Hotel Hamburg",
          location: "Hamburg",
          text: "Eine perfekte Partnerschaft! KAIZEN versteht unsere Anforderungen und liefert immer passende Kandidaten."
        }
      ],
      contactTitle: "Kontaktieren Sie uns",
      contactSubtitle: "Lassen Sie uns über eine Partnerschaft sprechen",
      formTitle: "Partnership Anfrage",
      formFields: {
        companyName: "Firmenname",
        contactPerson: "Ansprechpartner",
        email: "E-Mail Adresse",
        phone: "Telefonnummer",
        industry: "Branche",
        needs: "Personalbedarf",
        message: "Nachricht"
      },
      industryOptions: [
        { value: "", label: "Bitte wählen" },
        { value: "hotel", label: "Hotel & Gastronomie" },
        { value: "event", label: "Event & Messe" },
        { value: "catering", label: "Catering" },
        { value: "einzelhandel", label: "Einzelhandel" },
        { value: "sonstiges", label: "Sonstiges" }
      ],
      needsOptions: [
        { value: "", label: "Bitte wählen" },
        { value: "service", label: "Service-Personal" },
        { value: "kitchen", label: "Küchenpersonal" },
        { value: "bar", label: "Bar-Personal" },
        { value: "event", label: "Event-Personal" },
        { value: "logistics", label: "Logistik" },
        { value: "mixed", label: "Gemischter Bedarf" }
      ],
      messagePlaceholder: "Beschreiben Sie uns Ihren Personalbedarf oder stellen Sie Ihre Fragen...",
      submitButton: "Anfrage senden",
      responseTime: "Wir melden uns innerhalb von 24 Stunden bei Ihnen!",
      contactInfo: {
        email: "E-Mail",
        phone: "Telefon",
        address: "Adresse"
      }
    },
    EN: {
      title: "Partnership",
      subtitle: "Become our partner and benefit from first-class staff for your events, restaurants and hotels. Together we create extraordinary experiences.",
      becomePartner: "Become a Partner",
      whyKaizen: "Why KAIZEN as Partner?",
      advantagesSubtitle: "Your advantages of a partnership with us",
      benefits: [
        {
          title: "Qualified Professionals",
          description: "Access to our pool of over 2500 verified and experienced workers"
        },
        {
          title: "Quick Availability",
          description: "Short-term personnel placement possible within 24-48 hours"
        },
        {
          title: "Guaranteed Quality",
          description: "All our employees are pre-trained and have proven experience"
        },
        {
          title: "Reliable Service",
          description: "98% customer satisfaction and long-term partnerships speak for us"
        }
      ],
      servicesTitle: "Our Services",
      servicesSubtitle: "Tailored personnel solutions for your needs",
      services: [
        "Event staff for trade fairs and congresses",
        "Service staff for restaurants and hotels",
        "Bartenders and cocktail service",
        "Kitchen assistants and chefs",
        "Logistics and warehouse staff",
        "Temporary reinforcement for peak times"
      ],
      testimonialsTitle: "What our partners say",
      testimonialsSubtitle: "Experiences of successful partnerships",
      testimonials: [
        {
          name: "Hotel Adlon Kempinski",
          location: "Berlin",
          text: "KAIZEN helped us find qualified staff for our events at short notice. Absolutely reliable!"
        },
        {
          name: "Restaurant Zur Letzten Instanz",
          location: "Berlin",
          text: "Thanks to KAIZEN, we were able to quickly remedy our staff shortage. The quality of the workers is excellent."
        },
        {
          name: "Maritim Hotel Hamburg",
          location: "Hamburg",
          text: "A perfect partnership! KAIZEN understands our requirements and always delivers suitable candidates."
        }
      ],
      contactTitle: "Contact Us",
      contactSubtitle: "Let's talk about a partnership",
      formTitle: "Partnership Request",
      formFields: {
        companyName: "Company Name",
        contactPerson: "Contact Person",
        email: "Email Address",
        phone: "Phone Number",
        industry: "Industry",
        needs: "Personnel Needs",
        message: "Message"
      },
      industryOptions: [
        { value: "", label: "Please select" },
        { value: "hotel", label: "Hotel & Gastronomy" },
        { value: "event", label: "Event & Trade Fair" },
        { value: "catering", label: "Catering" },
        { value: "einzelhandel", label: "Retail" },
        { value: "sonstiges", label: "Other" }
      ],
      needsOptions: [
        { value: "", label: "Please select" },
        { value: "service", label: "Service Staff" },
        { value: "kitchen", label: "Kitchen Staff" },
        { value: "bar", label: "Bar Staff" },
        { value: "event", label: "Event Staff" },
        { value: "logistics", label: "Logistics" },
        { value: "mixed", label: "Mixed Needs" }
      ],
      messagePlaceholder: "Describe your personnel needs or ask your questions...",
      submitButton: "Send Request",
      responseTime: "We will contact you within 24 hours!",
      contactInfo: {
        email: "Email",
        phone: "Phone",
        address: "Address"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 px-2">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
            {t.subtitle}
          </p>
          <a 
            href="#contact-section"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.becomePartner}
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t.whyKaizen}</h2>
            <p className="text-xl text-gray-600">{t.advantagesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {index === 0 && <Users className="w-8 h-8 text-red-600" />}
                    {index === 1 && <Clock className="w-8 h-8 text-red-600" />}
                    {index === 2 && <Award className="w-8 h-8 text-red-600" />}
                    {index === 3 && <CheckCircle className="w-8 h-8 text-red-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-gray-600">{t.servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{t.testimonialsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600">{t.contactSubtitle}</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardTitle className="text-2xl font-bold text-center">{t.formTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      {t.formFields.companyName} *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      {t.formFields.contactPerson} *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      {t.formFields.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      {t.formFields.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                      {t.formFields.industry} *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      required
                    >
                      {t.industryOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                      {t.formFields.needs}
                    </label>
                    <select
                      name="needs"
                      value={formData.needs}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    >
                      {t.needsOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    {t.formFields.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                  />
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center mx-auto"
                  >
                    <Send className="w-6 h-6 mr-2" />
                    {t.submitButton}
                  </button>
                  <p className="text-gray-500 mt-4">
                    {t.responseTime}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{t.contactInfo.email}</h3>
              <p className="text-gray-300">partnership@kaizen-personalagentur.de</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{t.contactInfo.phone}</h3>
              <p className="text-gray-300">+49 (0) 89 123 456 789</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{t.contactInfo.address}</h3>
              <p className="text-gray-300">Maximilianstraße 12<br />80539 München</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
