import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8">{t('privacy.title')}</h1>
          
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-black">{t('privacy.intro.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.intro.text')}
              </p>
            </section>

            {/* Controller Information */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.controller.title')}</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>KAIZEN Personalagentur GmbH</strong><br />
                  Maximilianstraße 12<br />
                  80539 München<br />
                  Deutschland<br /><br />
                  E-Mail-Adresse: datenschutz@kaizen-personalagentur.de<br />
                  Telefon: +49 (0) 89 123 456 789
                </p>
              </div>
            </section>

            {/* Data Protection Officer */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.dpo.title')}</h2>
              <p className="text-gray-700">
                {t('privacy.dpo.text')}<br />
                E-Mail: datenschutz@kaizen-personalagentur.de
              </p>
            </section>

            {/* Overview of Processing */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-black">Übersicht der Verarbeitungen</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke 
                ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Arten der verarbeiteten Daten</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Bestandsdaten</li>
                    <li>• Kontaktdaten</li>
                    <li>• Inhaltsdaten</li>
                    <li>• Nutzungsdaten</li>
                    <li>• Meta-/Kommunikationsdaten</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Kategorien betroffener Personen</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Kommunikationspartner</li>
                    <li>• Nutzer</li>
                    <li>• Geschäfts- und Vertragspartner</li>
                    <li>• Bewerber</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-black">Maßgebliche Rechtsgrundlagen</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren 
                Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass 
                neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem 
                Wohn- oder Sitzland gelten können.
              </p>
            </section>

            {/* Security Measures */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Sicherheitsmaßnahmen</h2>
              <p className="text-gray-700 mb-4">
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands 
                der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und 
                der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten 
                und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen 
                geeignete technische und organisatorische Maßnahmen.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Zu den Maßnahmen gehören insbesondere:</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Verschlüsselung der Datenübertragung (SSL/TLS)</li>
                  <li>• Regelmäßige Sicherheitsupdates</li>
                  <li>• Zugriffsbeschränkungen</li>
                  <li>• Sicherung der Daten durch Backups</li>
                </ul>
              </div>
            </section>

            {/* Data Processing Details */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-black">Verarbeitungstätigkeiten im Einzelnen</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black mb-2">Kontaktaufnahme</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder 
                    via soziale Medien) werden die Angaben des Anfragenden verarbeitet, soweit dies 
                    zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO), 
                    Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black mb-2">Bewerbungsverfahren</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die für deren Beurteilung 
                    und Auswahl erforderlichen Daten mitteilen. Die erforderlichen Angaben sind, sofern 
                    wir ein Online-Bewerbungsformular anbieten, entsprechend gekennzeichnet.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Rechtsgrundlagen:</strong> Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), 
                    rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black mb-2">Web Analytics</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Wir setzen Webanalyse-Dienste ein, um die Nutzung unserer Website zu messen und zu optimieren. 
                    Dabei werden pseudonyme Nutzungsprofile erstellt und Cookies verwendet.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO), 
                    berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
                  </p>
                </div>
              </div>
            </section>

            {/* Rights of Data Subjects */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Rechte der betroffenen Personen</h2>
              <p className="text-gray-700 mb-4">
                Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere 
                aus Art. 15 bis 21 DSGVO ergeben:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Auskunftsrecht</h3>
                  <p className="text-gray-700 text-sm">
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten 
                    verarbeitet werden und auf Auskunft über diese Daten.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Berichtigungsrecht</h3>
                  <p className="text-gray-700 text-sm">
                    Sie haben das Recht, die Berichtigung und/oder Vervollständigung Ihrer Daten zu verlangen.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Löschungsrecht</h3>
                  <p className="text-gray-700 text-sm">
                    Sie haben das Recht, die Löschung Ihrer Daten zu verlangen, sofern die gesetzlichen 
                    Voraussetzungen erfüllt sind.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">Widerspruchsrecht</h3>
                  <p className="text-gray-700 text-sm">
                    Sie haben das Recht, der Verarbeitung Ihrer Daten aus Gründen, die sich aus Ihrer 
                    besonderen Situation ergeben, zu widersprechen.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">Änderungen der Datenschutzerklärung</h2>
              <p className="text-gray-700">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
                Datenschutzerklärung.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-red-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">Fragen zum Datenschutz?</h2>
              <p className="text-gray-700">
                Wenn Sie Fragen zu dieser Datenschutzerklärung haben, wenden Sie sich bitte an:<br />
                <strong>E-Mail:</strong> datenschutz@kaizen-personalagentur.de<br />
                <strong>Telefon:</strong> +49 (0) 89 123 456 789
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>Stand: November 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
