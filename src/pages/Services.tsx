
import React, { useState } from 'react';
import { Search, Wine, Coffee, Book } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Alle', icon: '📚' },
    { id: 'cocktails', name: 'Cocktails', icon: '🍸' },
    { id: 'wine', name: 'Wein', icon: '🍷' },
    { id: 'beer', name: 'Bier', icon: '🍺' },
    { id: 'coffee', name: 'Kaffee', icon: '☕' },
    { id: 'service', name: 'Service', icon: '🍽️' }
  ];

  const serviceGuides = [
    {
      id: 1,
      title: 'Mojito',
      category: 'cocktails',
      description: 'Der erfrischende Klassiker aus Kuba',
      ingredients: ['6 cl weißer Rum', '2 cl Limettensaft', '2 TL Zucker', 'Minze', 'Sodawasser'],
      preparation: 'Minze, Zucker und Limettensaft im Glas zerdrücken. Rum hinzufügen, mit Eis auffüllen und mit Sodawasser aufgießen.',
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300'
    },
    {
      id: 2,
      title: 'Aperol Spritz',
      category: 'cocktails',
      description: 'Der italienische Sommerdrink',
      ingredients: ['6 cl Aperol', '9 cl Prosecco', '3 cl Sodawasser', 'Orangenscheibe'],
      preparation: 'Aperol ins Glas geben, mit Prosecco und Sodawasser auffüllen. Mit Orangenscheibe garnieren.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300'
    },
    {
      id: 3,
      title: 'Riesling',
      category: 'wine',
      description: 'Deutscher Weißwein mit frischer Säure',
      ingredients: ['Temperatur: 8-10°C', 'Glas: Weißweinglas', 'Passt zu: Meeresfrüchte, Geflügel'],
      preparation: 'Gut gekühlt servieren. Sollte nicht zu lange geöffnet stehen.',
      image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=300'
    },
    {
      id: 4,
      title: 'Weissbier',
      category: 'beer',
      description: 'Bayerisches Weißbier richtig serviert',
      ingredients: ['Temperatur: 6-8°C', 'Glas: Weißbierglas', 'Hefe aufwirbeln'],
      preparation: 'Glas schräg halten, langsam einschenken, Hefe am Ende aufwirbeln.',
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300'
    },
    {
      id: 5,
      title: 'Cappuccino',
      category: 'coffee',
      description: 'Perfekter italienischer Cappuccino',
      ingredients: ['1 Espresso', '120ml Milch', 'Milchschaum'],
      preparation: 'Espresso zubereiten, Milch aufschäumen und vorsichtig eingießen.',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300'
    },
    {
      id: 6,
      title: 'Tischservice Knigge',
      category: 'service',
      description: 'Professioneller Service am Tisch',
      ingredients: ['Rechts servieren', 'Links abräumen', 'Immer freundlich'],
      preparation: 'Speisen von rechts servieren, Geschirr von links abräumen. Gäste nicht unterbrechen.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300'
    },
    {
      id: 7,
      title: 'Barolo',
      category: 'wine',
      description: 'König der italienischen Rotweine',
      ingredients: ['Temperatur: 16-18°C', 'Glas: Burgunderglas', 'Dekantieren empfohlen'],
      preparation: '2 Stunden vor dem Servieren öffnen. Bei Zimmertemperatur dekantieren.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300'
    },
    {
      id: 8,
      title: 'Pils',
      category: 'beer',
      description: 'Deutsches Pils perfekt gezapft',
      ingredients: ['Temperatur: 6-8°C', 'Glas: Pilsglas', 'Schaumkrone'],
      preparation: 'Glas kalt spülen, langsam zapfen, perfekte Schaumkrone von 2-3cm.',
      image: 'https://images.unsplash.com/photo-1535358562920-69e4d4d9ebe3?w=300'
    }
  ];

  const filteredGuides = serviceGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Service Lexikon</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ihr umfassender Leitfaden für professionellen Service in Gastronomie und Events. 
              Von Cocktail-Rezepten bis hin zu Weinwissen - alles was Sie brauchen.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Suchen Sie nach Getränken, Rezepten oder Tipps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guide Cards Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">{guide.title}</h3>
                    <span className="text-2xl">
                      {categories.find(cat => cat.id === guide.category)?.icon}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Zutaten/Hinweise:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {guide.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Zubereitung/Tipp:</h4>
                      <p className="text-sm text-gray-600">{guide.preparation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Keine Ergebnisse gefunden</h3>
              <p className="text-gray-500">
                Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Coffee className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">Getränke Expertise</h3>
              <p className="text-gray-600">
                Von klassischen Cocktails bis zu modernen Kreationen - 
                lernen Sie die Kunst der professionellen Getränkezubereitung.
              </p>
            </div>
            <div className="text-center">
              <Wine className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">Wein & Spirituosen</h3>
              <p className="text-gray-600">
                Umfassendes Wissen über Weine, Spirituosen und deren 
                fachgerechte Lagerung und Präsentation.
              </p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">Service Standards</h3>
              <p className="text-gray-600">
                Professionelle Service-Techniken und Etikette für 
                erstklassige Gästeerlebnisse in jedem Umfeld.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
