
import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle, Users, Briefcase, Star, Award, Target } from 'lucide-react';

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

  const specializations = [
    { name: 'Hotellerie', icon: Star },
    { name: 'Gastronomie', icon: Award },
    { name: 'Betriebsverpflegung', icon: Target },
    { name: 'Messeveranstaltungen', icon: Users },
    { name: 'Catering & private Feiern', icon: CheckCircle }
  ];

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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-red-600"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gray-600"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-red-400"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ihre Gäste sind unsere Gäste!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative space-y-10">
              {/* Opening Statement */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-50 via-red-25 to-red-50 p-8 rounded-2xl border border-red-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                    Verstärken Sie im Rahmen der Arbeitnehmerüberlassung Ihr Team flexibel, projektbezogen oder über einen längeren Zeitraum mit unserer Crew und lassen Sie uns gemeinsam für einzigartige Events sorgen.
                  </p>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="text-center py-8 px-4">
                <div className="relative">
                  <div className="text-6xl text-red-200 font-serif absolute -top-4 -left-2">"</div>
                  <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 italic relative z-10 max-w-4xl mx-auto">
                    Eine gelungene Veranstaltung beginnt mit einer Anfrage und endet mit einem unvergesslichen Erlebnis.
                  </blockquote>
                  <div className="text-6xl text-red-200 font-serif absolute -bottom-8 -right-2 rotate-180">"</div>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Award className="w-6 h-6 text-red-600 mr-3" />
                    Unsere Spezialisierungen
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {specializations.map((spec, index) => {
                      const IconComponent = spec.icon;
                      return (
                        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow mr-4">
                            <IconComponent className="w-5 h-5 text-red-600" />
                          </div>
                          <span className="text-gray-700 font-medium">{spec.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Target className="w-6 h-6 text-red-600 mr-3" />
                    Unser Versprechen
                  </h3>
                  <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Unsere hausintern geschulte Crew steht Ihnen zur Verfügung, ganz unabhängig um welche Art von Veranstaltung es sich handelt.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Qualitätsgarantie durch interne Schulungen
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-2xl text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Bereit für Ihre nächste Veranstaltung?</h3>
                  <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                    Kontaktieren Sie uns gerne jederzeit telefonisch, per E-Mail oder über das unten anliegende Kontaktformular und lernen Sie uns anschließend persönlich kennen.
                  </p>
                  <div className="text-2xl font-bold">
                    Wir freuen uns auf Sie!
                  </div>
                </div>
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
