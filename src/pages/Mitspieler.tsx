import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Star, Award, Users, Clock, MapPin, X, MousePointer2, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const Mitspieler = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isOutfitDialogOpen, setIsOutfitDialogOpen] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const navigate = useNavigate();
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const skillsDisplayRef = useRef<HTMLDivElement>(null);

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
  const jobSkillsMapping = {
    'logistic': ['Teamfähigkeit', 'Stressresistenz', 'Organisationstalent', 'Flexibilität', 'Körperliche Belastbarkeit', 'Zuverlässigkeit'],
    'service': ['Kommunikationsfähigkeit', 'Kundenservice', 'Teamfähigkeit', 'Multitasking', 'Gutes Gedächtnis', 'Freundlichkeit'],
    'barkeeper': ['Kommunikationsfähigkeit', 'Kreativität', 'Stressresistenz', 'Kundenservice', 'Multitasking', 'Geschicklichkeit'],
    'kitchen': ['Teamfähigkeit', 'Stressresistenz', 'Organisationstalent', 'Flexibilität', 'Hygienebewusstsein', 'Schnelligkeit']
  };
  const jobTypes = [{
    id: 'logistic',
    name: 'Logistik',
    emoji: '📦',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600'
  }, {
    id: 'service',
    name: 'Service',
    emoji: '🍽️',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600'
  }, {
    id: 'barkeeper',
    name: 'Barkeeper',
    emoji: '🍸',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600'
  }, {
    id: 'kitchen',
    name: 'Küchenhilfe',
    emoji: '👨‍🍳',
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600'
  }];
  const partners = [{
    name: 'Aramark',
    image: '/lovable-uploads/0803f22f-53e8-4662-ad7c-ddd71fdf923c.png'
  }, {
    name: 'Ritz-Carlton Wolfsburg',
    image: '/lovable-uploads/8857f61f-a342-47cc-978d-eae8201b3bd1.png'
  }, {
    name: 'KaDeWe Berlin',
    image: '/lovable-uploads/206324ce-ca1e-46fd-bd8c-116286eb5772.png'
  }, {
    name: 'Maritim Hotels',
    image: '/lovable-uploads/6953465e-3b57-4998-932e-e833a7957d99.png'
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
      image: "/lovable-uploads/8f2917d4-1d51-4599-84fd-7bc4e18c72a0.png",
      clothing: ["Schwarze oder dunkelblaue Hose", "Weißes oder schwarzes Hemd/Bluse", "Schwarze, geschlossene Schuhe", "Schwarze Weste oder Blazer (falls erforderlich)", "Dezente Frisur und Make-up"],
      equipment: ["Kellnertablett", "Notizblock und Stift", "Kellnermesser/Korkenzieher", "Servietten", "Taschenlampe (für Abendveranstaltungen)"]
    },
    logistik: {
      title: "Logistik Outfit",
      description: "Praktisch und sicher für Logistik-Tätigkeiten",
      image: "/lovable-uploads/56587682-403e-4b06-90eb-2283e7f59ac2.png",
      clothing: ["Robuste Arbeitskleidung oder Uniform", "Sicherheitsschuhe mit Stahlkappe", "Warnweste (falls erforderlich)", "Lange Hose (keine Shorts)", "Praktisches T-Shirt oder Arbeitshemd"],
      equipment: ["Arbeitshandschuhe", "Helm oder Kappe", "Rückengurt (bei schwerem Heben)", "Scanner oder Clipboard", "Walkie-Talkie (falls erforderlich)"]
    }
  };

  const handleJobClick = (jobId: string) => {
    navigate('/bewerbung', {
      state: {
        selectedJob: jobId
      }
    });
  };

  const handleJobTypeSelect = (jobId: string) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  // Add useEffect to handle scrolling when selectedJob changes
  useEffect(() => {
    if (selectedJob && skillsDisplayRef.current) {
      setTimeout(() => {
        skillsDisplayRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [selectedJob]);

  const openOutfitDialog = (outfitType: string) => {
    setSelectedOutfit(outfitType);
    setIsOutfitDialogOpen(true);
  };

  const handleApplyClick = () => {
    navigate('/bewerbung');
  };

  return <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-7xl mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text font-bold text-amber-400">
              Werde Teil unseres Teams! 🚀
            </h1>
            <p className="text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Starte deine Karriere in der Event- und Gastronomiebranche mit uns!
            </p>
            <button onClick={handleApplyClick} className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl transform hover:scale-105 hover:shadow-yellow-400/25">
              Jetzt bewerben! ✨
            </button>
          </div>
        </div>
      </section>

      {/* Arbeitskleidung Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">So stylish wirst du aussehen! 👔</h2>
            <p className="text-xl text-gray-600">Professionelle Arbeitskleidung für jeden Einsatz</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <button onClick={() => openOutfitDialog('service')} className="relative w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 mb-6 hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl group-hover:shadow-blue-500/25">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MousePointer2 className="w-8 h-8 text-white animate-pulse" />
                </div>
                <img src="/lovable-uploads/8f2917d4-1d51-4599-84fd-7bc4e18c72a0.png" alt="Service Uniform" className="w-full h-48 object-contain rounded-lg" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Outfit</h3>
              <p className="text-gray-600">Elegant und professionell</p>
              <p className="text-sm text-blue-600 font-medium mt-2">Klicken für Details</p>
            </div>
            <div className="text-center group">
              <button onClick={() => openOutfitDialog('logistik')} className="relative w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 mb-6 hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl group-hover:shadow-orange-500/25">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MousePointer2 className="w-8 h-8 text-white animate-pulse" />
                </div>
                <img src="/lovable-uploads/bae93f50-47c9-4ef6-8b68-ee0cc056d03a.png" alt="Logistik Uniform" className="w-full h-48 object-contain rounded-lg" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Logistik Outfit</h3>
              <p className="text-gray-600">Praktisch und sicher</p>
              <p className="text-sm text-orange-600 font-medium mt-2">Klicken für Details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Arbeite bei den Besten! 🌟</h2>
            <p className="text-xl text-gray-600">Unsere Partner bieten dir spannende Jobmöglichkeiten</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                <div className="w-full h-32 flex items-center justify-center mb-4">
                  <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain rounded-xl" />
                </div>
                <h3 className="text-center font-bold text-gray-800 text-sm">{partner.name}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white" ref={skillsSectionRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Welche Skills brauchst du? 💪</h2>
            <p className="text-xl text-gray-600">Wähle einen Job und entdecke die wichtigsten Fähigkeiten</p>
            <p className="text-lg text-indigo-600 font-medium mt-2">👆 Klicke auf einen Job-Typ!</p>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {jobTypes.map(job => <button key={job.id} onClick={() => handleJobTypeSelect(job.id)} className={`p-8 rounded-2xl border-2 transition-all transform hover:scale-105 shadow-lg cursor-pointer relative group ${selectedJob === job.id ? `${job.color} text-white border-white shadow-2xl scale-105` : 'bg-white text-gray-700 border-gray-200 hover:shadow-xl hover:border-indigo-200 hover:bg-indigo-50'}`}>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MousePointer2 className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div className="text-4xl mb-4 group-hover:animate-pulse">{job.emoji}</div>
                  <h3 className="text-xl font-bold">{job.name}</h3>
                  <p className="text-sm mt-2 opacity-75">Klicken für Details</p>
                </button>)}
            </div>
            
            {selectedJob && <div ref={skillsDisplayRef} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Wichtige Skills für {jobTypes.find(job => job.id === selectedJob)?.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {jobSkillsMapping[selectedJob as keyof typeof jobSkillsMapping]?.map(skill => <div key={skill} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 text-center transform hover:scale-105 transition-all">
                      <span className="font-semibold text-gray-700 text-sm md:text-base leading-relaxed">{skill}</span>
                    </div>)}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    💡 Keine Sorge - wir schulen dich in allen wichtigen Bereichen!
                  </p>
                </div>
              </div>}
          </div>
        </div>
      </section>

      {/* Job Types Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Für welche Jobs brennst du? 🔥</h2>
            <p className="text-xl text-gray-600">Klicke auf deinen Traum-Job und bewirb dich direkt!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobTypes.map(job => <button key={job.id} onClick={() => handleJobClick(job.id)} className={`p-10 rounded-2xl transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl ${job.color} ${job.hoverColor} text-white border-2 border-white/20 hover:border-white/40 group`}>
                <div className="text-5xl mb-6 group-hover:animate-bounce">{job.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{job.name}</h3>
                <p className="text-white/80 text-sm">Jetzt bewerben →</p>
              </button>)}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Warum KAIZEN die beste Wahl ist! 🎯</h2>
            <p className="text-xl text-gray-600">Das macht uns zu deinem idealen Arbeitgeber</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-indigo-100">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Häufige Fragen 🤔</h2>
            <p className="text-xl text-gray-600">Alle Antworten auf einen Blick</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && <div className="px-8 pb-8">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8">Ready to start? 🚀</h2>
          <p className="text-2xl mb-10 text-indigo-100 leading-relaxed">
            Bewirb dich jetzt und starte schon bald deinen ersten Job!
          </p>
          <button onClick={handleApplyClick} className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-16 py-8 rounded-full text-2xl font-bold transition-all shadow-2xl transform hover:scale-105 hover:shadow-yellow-400/25">
            Jetzt bewerben! ✨
          </button>
          <p className="mt-8 text-indigo-200 text-lg">
            ⚡ Schnelle Antwort garantiert • 🎯 Sofortiger Jobeinstieg möglich
          </p>
        </div>
      </section>

      {/* Outfit Dialog */}
      <Dialog open={isOutfitDialogOpen} onOpenChange={setIsOutfitDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {selectedOutfit && outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedOutfit && <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 text-lg">
                  {outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.description}
                </p>
              </div>

              {selectedOutfit === 'logistik' ? <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="flex items-stretch justify-center py-[50px]">
                      <img src={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.image} alt={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.title} className="rounded-lg object-contain" style={{
                  height: 'calc(2 * 6rem + 12rem + 1.5rem)'
                }} />
                    </div>
                    
                    <div className="space-y-6 flex flex-col">
                      <div className="bg-blue-50 p-6 rounded-lg flex-1">
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

                      <div className="bg-green-50 p-6 rounded-lg flex-1">
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
                    </div>
                  </div>
                </div> : <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center py-[63px]">
                    <img src={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.image} alt={outfitInfo[selectedOutfit as keyof typeof outfitInfo]?.title} className="w-full h-80 rounded-lg object-contain" />
                  </div>
                  
                  <div className="space-y-6">
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
