import React, { useState } from 'react';
import { ChevronDown, Star, Award, Users, Clock, MapPin, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
const Mitspieler = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [isOutfitDialogOpen, setIsOutfitDialogOpen] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const faqs = [{
    question: 'Wie läuft der Bewerbungsprozess ab?',
    answer: 'Nach Ihrer Online-Bewerbung laden wir Sie zu einem persönlichen Gespräch ein. Bei Eignung erhalten Sie eine Schulung und können sofort loslegen!'
  }, {
    question: 'Wann und wo kann ich arbeiten?',
    answer: 'Wir bieten flexible Arbeitszeiten an verschiedenen Standorten. Sie können selbst entscheiden, wann und wo Sie arbeiten möchten.'
  }, {
    question: 'Wie viel kann ich verdienen?',
    answer: 'Die Vergütung richtet sich nach der Position und Erfahrung. Wir zahlen faire Löhne über dem Mindestlohn plus Zuschläge für Wochenenden und Feiertage.'
  }, {
    question: 'Brauche ich Erfahrung?',
    answer: 'Nein! Wir bilden Sie aus. Wichtig sind Motivation, Freundlichkeit und Zuverlässigkeit. Erfahrung ist ein Plus, aber nicht Voraussetzung.'
  }, {
    question: 'Was für Kleidung muss ich tragen?',
    answer: 'Je nach Einsatz stellen wir Ihnen professionelle Arbeitskleidung zur Verfügung oder Sie erhalten genaue Vorgaben für das Outfit.'
  }];
  const skills = ['Teamwork', 'Kommunikation', 'Flexibilität', 'Stressresistenz', 'Kundenservice', 'Mehrsprachig', 'Organisationstalent', 'Kreativität'];
  const jobTypes = [{
    id: 'logistic',
    name: 'Logistik',
    emoji: '📦',
    color: 'bg-blue-500'
  }, {
    id: 'service',
    name: 'Service',
    emoji: '🍽️',
    color: 'bg-green-500'
  }, {
    id: 'barkeeper',
    name: 'Barkeeper',
    emoji: '🍸',
    color: 'bg-purple-500'
  }, {
    id: 'kitchen',
    name: 'Küchenhilfe',
    emoji: '👨‍🍳',
    color: 'bg-orange-500'
  }];
  const partners = [{
    name: 'Hotel Excellence',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200'
  }, {
    name: 'Restaurant Deluxe',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=200'
  }, {
    name: 'Event Center Pro',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=200'
  }, {
    name: 'Catering Masters',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200'
  }];
  const whyUs = [{
    icon: '💰',
    title: 'Faire Bezahlung',
    desc: 'Überdurchschnittliche Löhne + Zuschläge'
  }, {
    icon: '🚀',
    title: 'Schneller Einstieg',
    desc: 'Von der Bewerbung zum ersten Job in wenigen Tagen'
  }, {
    icon: '📚',
    title: 'Kostenlose Schulungen',
    desc: 'Wir bilden Sie professionell aus'
  }, {
    icon: '🏆',
    title: 'Karrierechancen',
    desc: 'Entwicklungsmöglichkeiten in der Branche'
  }, {
    icon: '🤝',
    title: 'Tolle Kollegen',
    desc: 'Arbeiten Sie mit einem motivierten Team'
  }, {
    icon: '📍',
    title: 'Flexible Standorte',
    desc: 'Jobs in ganz Deutschland verfügbar'
  }];
  const outfitInfo = {
    service: {
      title: "Service Outfit",
      description: "Elegant und professionell für den Service-Bereich",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      clothing: ["Schwarze oder dunkelblaue Hose", "Weißes oder schwarzes Hemd/Bluse", "Schwarze, geschlossene Schuhe", "Schwarze Weste oder Blazer (falls erforderlich)", "Dezente Frisur und Make-up"],
      equipment: ["Kellnertablett", "Notizblock und Stift", "Kellnermesser/Korkenzieher", "Servietten", "Taschenlampe (für Abendveranstaltungen)"]
    },
    logistik: {
      title: "Logistik Outfit",
      description: "Praktisch und sicher für Logistik-Tätigkeiten",
      image: "/lovable-uploads/97a39fa8-febf-41ce-ae11-2d531b83d26a.png",
      clothing: ["Robuste Arbeitskleidung oder Uniform", "Sicherheitsschuhe mit Stahlkappe", "Warnweste (falls erforderlich)", "Lange Hose (keine Shorts)", "Praktisches T-Shirt oder Arbeitshemd"],
      equipment: ["Arbeitshandschuhe", "Helm oder Kappe", "Rückengurt (bei schwerem Heben)", "Scanner oder Clipboard", "Walkie-Talkie (falls erforderlich)"]
    }
  };
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const toggleJob = (job: string) => {
    setSelectedJobs(prev => prev.includes(job) ? prev.filter(j => j !== job) : [...prev, job]);
  };
  const openOutfitDialog = (outfitType: string) => {
    setSelectedOutfit(outfitType);
    setIsOutfitDialogOpen(true);
  };
  return <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Werde Teil unseres Teams! 🚀</h1>
            <p className="text-2xl mb-8 text-pink-100">
              Starte deine Karriere in der Event- und Gastronomiebranche mit uns!
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-full text-xl font-bold transition-colors shadow-lg transform hover:scale-105">
              Jetzt bewerben! ✨
            </button>
          </div>
        </div>
      </section>

      {/* Arbeitskleidung Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">So stylish wirst du aussehen! 👔</h2>
            <p className="text-xl text-gray-600">Professionelle Arbeitskleidung für jeden Einsatz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <button onClick={() => openOutfitDialog('service')} className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 mb-4 hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-105">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" alt="Service Uniform" className="w-full h-48 object-cover rounded-lg" />
              </button>
              <h3 className="text-xl font-bold text-gray-800">Service Outfit</h3>
              <p className="text-gray-600">Elegant und professionell</p>
            </div>
            <div className="text-center">
              <button onClick={() => openOutfitDialog('logistik')} className="w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 mb-4 hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105">
                <img src="/lovable-uploads/97a39fa8-febf-41ce-ae11-2d531b83d26a.png" alt="Logistik Uniform" className="w-full h-48 object-top rounded-lg object-fill" />
              </button>
              <h3 className="text-xl font-bold text-gray-800">Logistik Outfit</h3>
              <p className="text-gray-600">Praktisch und sicher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Arbeite bei den Besten! 🌟</h2>
            <p className="text-xl text-gray-600">Unsere Partner bieten dir spannende Jobmöglichkeiten</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                <img src={partner.image} alt={partner.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-center font-bold text-gray-800">{partner.name}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Was sind deine Superkräfte? 💪</h2>
            <p className="text-xl text-gray-600">Wähle aus, was auf dich zutrifft (mehrere möglich)</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(skill => <button key={skill} onClick={() => toggleSkill(skill)} className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${selectedSkills.includes(skill) ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500' : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-purple-400'}`}>
                <span className="font-semibold">{skill}</span>
              </button>)}
          </div>
        </div>
      </section>

      {/* Job Types Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Für welche Jobs brennst du? 🔥</h2>
            <p className="text-xl text-gray-600">Wähle deine Traum-Positionen aus</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobTypes.map(job => <button key={job.id} onClick={() => toggleJob(job.id)} className={`p-8 rounded-xl border-3 transition-all transform hover:scale-105 ${selectedJobs.includes(job.id) ? `${job.color} text-white border-white shadow-xl` : 'bg-white text-gray-700 border-gray-300 hover:shadow-lg'}`}>
                <div className="text-4xl mb-4">{job.emoji}</div>
                <h3 className="text-xl font-bold">{job.name}</h3>
              </button>)}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Warum KAIZEN die beste Wahl ist! 🎯</h2>
            <p className="text-xl text-gray-600">Das macht uns zu deinem idealen Arbeitgeber</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Häufige Fragen 🤔</h2>
            <p className="text-xl text-gray-600">Alle Antworten auf einen Blick</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to start? 🚀</h2>
          <p className="text-2xl mb-8 text-pink-100">
            Bewirb dich jetzt und starte schon bald deinen ersten Job!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-6 rounded-full text-2xl font-bold transition-colors shadow-lg transform hover:scale-105">
            Jetzt bewerben! ✨
          </button>
          <p className="mt-6 text-pink-200">
            ⚡ Schnelle Antwort garantiert • 🎯 Sofortiger Jobeinstieg möglich
          </p>
        </div>
      </section>

      {/* Outfit Dialog */}
      <Dialog open={isOutfitDialogOpen} onOpenChange={setIsOutfitDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {selectedOutfit && outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedOutfit && <div className="space-y-6">
              <div className="text-center">
                <img src={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.image} alt={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.title} className="w-full max-w-md mx-auto h-80 object-cover rounded-lg" />
                <p className="mt-4 text-gray-600 text-lg">
                  {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.description}
                </p>
              </div>

              {selectedOutfit === 'logistik' ? <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      👔 Arbeitskleidung
                    </h3>
                    <ul className="space-y-2">
                      {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.clothing.map((item, index) => <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>)}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      🛠️ Equipment
                    </h3>
                    <ul className="space-y-2">
                      {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.equipment.map((item, index) => <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div> : <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      👔 Arbeitskleidung
                    </h3>
                    <ul className="space-y-2">
                      {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.clothing.map((item, index) => <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>)}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      🛠️ Equipment
                    </h3>
                    <ul className="space-y-2">
                      {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.equipment.map((item, index) => <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>}

              <div className="text-center bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Hinweis:</strong> Die spezifische Arbeitskleidung und Ausrüstung kann je nach Einsatzort variieren. 
                  Wir informieren Sie vor jedem Einsatz über die genauen Anforderungen.
                </p>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </div>;
};
export default Mitspieler;