import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle, Users, Briefcase } from 'lucide-react';

const Partnership = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    jobType: '',
    message: ''
  });

  const jobTypes = [
    { id: 'logistic', name: 'Logistik', icon: '📦' },
    { id: 'service', name: 'Service', icon: '🍽️' },
    { id: 'barkeeper', name: 'Barkeeper', icon: '🍸' },
    { id: 'kitchen', name: 'Küchenhilfe', icon: '👨‍🍳' }
  ];

  const completedJobs = [
    { event: 'Oktoberfest München 2024', staff: 25, duration: '14 Tage' },
    { event: 'Hochzeitssaison Sommer', staff: 180, duration: '3 Monate' },
    { event: 'Corporate Events Q3', staff: 95, duration: '45 Tage' },
    { event: 'Restaurant Saison', staff: 120, duration: '6 Monate' }
  ];

  const currentPartners = [
    { name: 'Hotel Bavaria', location: 'München', since: '2020' },
    { name: 'Restaurant Alpenblick', location: 'Garmisch', since: '2019' },
    { name: 'Event Center Elite', location: 'Berlin', since: '2021' },
    { name: 'Catering Premium', location: 'Hamburg', since: '2022' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns zeitnah bei Ihnen.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">PARTNERSCHAFT</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Profitieren Sie von unserem umfangreichen Personalpool und unserer langjährigen Erfahrung 
              in der Event- und Gastronomiebranche.
            </p>
            <div className="flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Verfügbare Positionen</h2>
            <p className="text-xl text-gray-600">Qualifiziertes Personal für alle Bereiche</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobTypes.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{job.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{job.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-2" />
                    50+ verfügbar
                  </p>
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Sofort einsetzbar
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Description Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">Ihre Gäste sind unsere Gäste!</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <div className="bg-gradient-to-r from-red-50 to-transparent p-6 rounded-lg border-l-4 border-red-600">
                <p className="font-medium">
                  Verstärken Sie im Rahmen der Arbeitnehmerüberlassung Ihr Team flexibel, projektbezogen oder über einen längeren Zeitraum mit unserer Crew und lassen Sie uns gemeinsam für einzigartige Events sorgen.
                </p>
              </div>
              
              <div className="text-center py-4">
                <p className="text-xl font-semibold text-gray-800 italic">
                  Eine gelungene Veranstaltung beginnt mit einer Anfrage und endet mit einem unvergesslichen Erlebnis.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Unsere Spezialisierungen:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Hotellerie
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Gastronomie
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Betriebsverpflegung
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Messeveranstaltungen
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      Catering & private Feiern
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Unsere hausintern geschulte Crew steht Ihnen zur Verfügung, ganz unabhängig um welche Art von Veranstaltung es sich handelt.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-red-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 mb-4">
                  Kontaktieren Sie uns gerne jederzeit telefonisch, per E-Mail oder über das unten anliegende Kontaktformular und lernen Sie uns anschließend persönlich kennen.
                </p>
                
                <p className="text-xl font-bold text-red-600">
                  Wir freuen uns auf Sie!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Kontaktieren Sie uns</h2>
            <p className="text-xl text-gray-600">Lassen Sie uns über Ihre Personalanforderungen sprechen</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Unternehmen *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Ansprechpartner *</label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Benötigte Position</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Bitte wählen...</option>
                {jobTypes.map((job) => (
                  <option key={job.id} value={job.id}>{job.name}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Nachricht</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Beschreiben Sie Ihre Anforderungen..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Kontakt aufnehmen
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Completed Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Erfolgreich abgeschlossene Projekte</h2>
            <p className="text-xl text-gray-600">Unsere Referenzen sprechen für sich</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{job.event}</h3>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {job.staff} Mitarbeiter vermittelt
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Projektdauer: {job.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere aktuellen Partner</h2>
            <p className="text-xl text-gray-600">Vertrauen Sie auf bewährte Partnerschaften</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Briefcase className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-black mb-2">{partner.name}</h3>
                <p className="text-gray-600 flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {partner.location}
                </p>
                <p className="text-sm text-gray-500">Partner seit {partner.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
