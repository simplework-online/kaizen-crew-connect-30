import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Imprint = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8">Impressum</h1>
          
          <div className="space-y-8">
            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold text-lg">KAIZEN Personalagentur GmbH</p>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p>Maximilianstraße 12</p>
                    <p>80539 München</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Kontakt</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">+49 (0) 89 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">info@kaizen-personalagentur.de</span>
                </div>
              </div>
            </section>

            {/* Legal Representatives */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Vertreten durch</h2>
              <p className="text-gray-700">Geschäftsführer: Max Müller</p>
            </section>

            {/* Registration */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Registereintrag</h2>
              <div className="space-y-2 text-gray-700">
                <p>Eintragung im Handelsregister</p>
                <p>Registergericht: Amtsgericht München</p>
                <p>Registernummer: HRB 234567</p>
              </div>
            </section>

            {/* VAT ID */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123456789
              </p>
            </section>

            {/* Professional Liability */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Berufsrechtliche Regelungen</h2>
              <div className="space-y-2 text-gray-700">
                <p>Zuständige Aufsichtsbehörde:</p>
                <p>Bundesagentur für Arbeit</p>
                <p>Regensburger Str. 104</p>
                <p>90478 Nürnberg</p>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Haftungsausschluss</h2>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-black mb-2">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                    der Seiten verantwortlich.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsible for Content */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="text-gray-700">
                <p>Max Müller</p>
                <p>Maximilianstraße 12</p>
                <p>80539 München</p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Streitschlichtung</h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-red-600 hover:text-red-800 ml-1 break-all">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
