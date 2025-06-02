import React from 'react';
import { MapPin, Users, Calendar, Award } from 'lucide-react';
import LocationMap from '../components/LocationMap';

const About = () => {
  const team = [{
    name: 'Paiman Sharifzada',
    position: 'Geschäftsführender Gesellschafter',
    image: 'https://kaizen-personalagentur.de/wp-content/uploads/2020/09/Paiman.jpg',
    description: 'Maybe nach Text Fragen?'
  }, {
    name: 'Margan Sharifzada',
    position: 'Standortleitung Berlin',
    image: 'https://kaizen-personalagentur.de/wp-content/uploads/2025/03/Profilbild-Margan-Sharifzada-750x450-1.jpg',
    description: 'Maybe nach Text Fragen?'
  }, {
    name: 'Sepideh Saleh Baigi',
    position: 'Standortleitung Hamburg',
    image: 'https://kaizen-personalagentur.de/wp-content/uploads/2025/04/Bild-Sepideh-Saleh-Baigi.jpeg',
    description: 'Maybe nach Text Fragen?'
  }, {
    name: 'Maik Wala',
    position: 'Standortleitung Hannover / Braunschweig',
    image: 'https://kaizen-personalagentur.de/wp-content/uploads/2025/04/Bild-Maik-Wala-750x450-1.jpg',
    description: 'Maybe nach Text Fragen?'
  }, {
    name: 'Jimmy Jimblo',
    position: 'Happiness Manager',
    image: 'https://kaizen-personalagentur.de/wp-content/uploads/2020/09/Jimmy-Jimblo.jpg',
    description: 'Maybe nach Text Fragen?'
  }];
  const locations = [{
    city: 'Hannover',
    address: 'Königstr. 48, 30175 Hannover',
    phone: '+49 (0) 511 99998511'
  }, {
    city: 'Berlin',
    address: 'Unter den Linden 77, 10117 Berlin',
    phone: '+49 (0) 30 234 567'
  }, {
    city: 'Hamburg',
    address: 'Jungfernstieg 15, 20354 Hamburg',
    phone: '+49 (0) 40 345 678'
  }, {
    city: 'Braunschweig',
    address: 'Hohe Str. 95, 50667 Köln',
    phone: '+49 (0) 221 456 789'
  }];
  const milestones = [{
    year: '2018',
    event: 'Gründung von KAIZEN Personalagentur in München'
  }, {
    year: '2019',
    event: 'Erste große Partnerschaften mit Hotels und Restaurants'
  }, {
    year: '2020',
    event: 'Expansion nach Berlin und Hamburg'
  }, {
    year: '2021',
    event: 'Über 1000 erfolgreich vermittelte Arbeitskräfte'
  }, {
    year: '2022',
    event: 'Eröffnung der Niederlassung in Köln'
  }, {
    year: '2023',
    event: 'Auszeichnung als "Beste Personalagentur des Jahres"'
  }, {
    year: '2024',
    event: 'Über 50 Partnerunternehmen deutschlandweit'
  }];
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Über KAIZEN Personalagentur</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seit 2018 verbinden wir qualifizierte Fachkräfte mit führenden Unternehmen 
              in der Event- und Gastronomiebranche. Unser Name steht für kontinuierliche Verbesserung 
              und Exzellenz in der Personalvermittlung.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-black mb-6">Unsere Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Wir schaffen Brücken zwischen Unternehmen und Talenten. Unsere Mission ist es, 
                durch professionelle Personalvermittlung sowohl Arbeitgebern als auch Arbeitnehmern 
                zu nachhaltigem Erfolg zu verhelfen. Dabei steht Qualität, Vertrauen und 
                Zuverlässigkeit im Mittelpunkt unseres Handelns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-black mb-6">Unsere Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Wir streben danach, die führende Personalagentur in Deutschland zu werden. 
                Durch Innovation, kontinuierliche Weiterentwicklung und einen persönlichen Ansatz 
                wollen wir Standards in der Branche setzen und langfristige Partnerschaften aufbauen, 
                die allen Beteiligten zum Vorteil gereichen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Unser Team</h2>
            <p className="text-xl text-gray-600">Die Menschen hinter KAIZEN Personalagentur</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Standorte</h2>
            <p className="text-xl text-gray-600">Deutschlandweit für Sie da</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {locations.map((location, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-black">{location.city}</h3>
                </div>
                <p className="text-gray-700 mb-2">{location.address}</p>
                <p className="text-gray-600">{location.phone}</p>
              </div>)}
          </div>

          {/* Interactive Map */}
          <LocationMap locations={locations} />
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Geschichte</h2>
            <p className="text-xl text-gray-600">Von der Gründung bis heute</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {milestones.map((milestone, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>)}
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center p-4">
              <div className="w-full h-full">
                <img src="/lovable-uploads/4c83dd98-cefb-4b4c-8d22-dca988e5439a.png" alt="KAIZEN Bürogebäude" className="w-full h-full rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">KAIZEN in Zahlen</h2>
            <p className="text-xl text-gray-300">Unsere Erfolge sprechen für sich</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">2500+</h3>
              <p className="text-gray-300">Vermittelte Mitarbeiter</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">6+</h3>
              <p className="text-gray-300">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-300">Partnerunternehmen</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-gray-300">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default About;
