import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    {
      id: 1,
      name: 'Hotel Excellence',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      website: 'https://example.com'
    },
    {
      id: 2,
      name: 'Restaurant Deluxe',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
      website: 'https://example.com'
    },
    {
      id: 3,
      name: 'Event Center Pro',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400',
      website: 'https://example.com'
    },
    {
      id: 4,
      name: 'Catering Masters',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
      website: 'https://example.com'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'Excellent service! KAIZEN provided us with professional and reliable staff for our hotel. The booking process was smooth and the staff arrived on time and well-prepared.',
      date: '2 Wochen her',
      verified: true
    },
    {
      id: 2,
      name: 'Michael K.',
      rating: 5,
      text: 'We have been working with KAIZEN for over a year now. Their staff is always professional, punctual, and well-trained. Highly recommended for event staffing!',
      date: '1 Monat her',
      verified: true
    },
    {
      id: 3,
      name: 'Anna L.',
      rating: 4,
      text: 'Great experience with KAIZEN. They helped us staff our restaurant during peak season. Good communication and reliable service.',
      date: '3 Wochen her',
      verified: true
    },
    {
      id: 4,
      name: 'Thomas R.',
      rating: 5,
      text: 'Professional staffing agency with excellent customer service. They understand our needs and always deliver quality personnel.',
      date: '1 Monat her',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa W.',
      rating: 5,
      text: 'KAIZEN has been instrumental in helping us manage our events. Their staff is well-trained and professional. Very satisfied with their service.',
      date: '2 Monate her',
      verified: true
    },
    {
      id: 6,
      name: 'Daniel F.',
      rating: 4,
      text: 'Reliable and efficient service. The staff provided by KAIZEN helped make our corporate event a success. Will definitely use their services again.',
      date: '1 Monat her',
      verified: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handlePartnerClick = (website: string) => {
    window.open(website, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            KAIZEN<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Ihre professionelle Personalagentur für Events, Gastronomie und Service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Jetzt Partner werden
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Als Mitspieler bewerben
            </button>
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Partner</h2>
            <p className="text-xl text-gray-600">Vertrauen Sie auf unsere bewährten Partnerschaften</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="w-full flex-shrink-0">
                    <div 
                      className="relative h-32 cursor-pointer group"
                      onClick={() => handlePartnerClick(partner.website)}
                    >
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center">{partner.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Entdecken Sie KAIZEN</h2>
            <p className="text-xl text-gray-600">Lernen Sie uns und unsere Arbeit kennen</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-colors">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-75">Video Placeholder - Firmenvorstellung</p>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Der Begriff <strong className="text-red-600">KAIZEN</strong> kommt aus der japanischen Lebensphilosophie und bedeutet wörtlich übersetzt "Wandel zum Besseren" (KAI = Wandel; ZEN = zum Besseren).
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Dieser ewig andauernde Prozess der Veränderung bietet grenzenloses Potential nach Oben.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Wir l(i)eben diesen Wandel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Google Bewertungen</h2>
            <p className="text-xl text-gray-600">Was unsere Kunden über uns sagen</p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.8</span>
                <span className="text-gray-600">({reviews.length} Bewertungen)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">{review.name}</p>
                      {review.verified && (
                        <p className="text-xs text-green-600">✓ Verifizierte Bewertung</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-blue-600">Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://maps.app.goo.gl/TbZnjgiQpPWsxxw89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
            >
              <span>Alle Bewertungen auf Google ansehen</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für eine Zusammenarbeit?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktieren Sie uns noch heute und entdecken Sie, wie wir Ihr Unternehmen unterstützen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Kontakt aufnehmen
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
