import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Homepage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundSlide, setBackgroundSlide] = useState(0);

  const partners = [
    {
      id: 5,
      name: 'Party Rent',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
      website: 'https://www.party.rent/de'
    },
    {
      id: 6,
      name: 'Maritim Hotels',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400',
      website: 'https://www.maritim.de/'
    },
    {
      id: 7,
      name: 'KaDeWe Berlin',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      website: 'https://www.kadewe.de/'
    },
    {
      id: 8,
      name: 'The Ritz-Carlton Wolfsburg',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
      website: 'https://www.ritzcarlton.com'
    },
    {
      id: 9,
      name: 'Aramark',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      website: 'https://aramark-dmag.de/'
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

  const backgroundImages = [
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop'
  ];

  // Auto-advance background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handlePartnerClick = (website: string) => {
    window.open(website, '_blank');
  };

  const handleContactClick = () => {
    navigate('/partnership#contact-form');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Slideshow */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === backgroundSlide ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Event background ${index + 1}`}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            KAIZEN<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light leading-relaxed">
            Ihre professionelle Personalagentur für Events, Gastronomie und Service
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate('/partnership')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Jetzt Partner werden
            </button>
            <button 
              onClick={() => navigate('/mitspieler')}
              className="border border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-medium transition-all duration-300"
            >
              Als Mitspieler bewerben
            </button>
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Partner</h2>
            <p className="text-xl text-gray-600 font-light">Vertrauen Sie auf unsere bewährten Partnerschaften</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="w-full flex-shrink-0">
                    <div 
                      className="relative h-40 cursor-pointer group"
                      onClick={() => handlePartnerClick(partner.website)}
                    >
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-light text-center">{partner.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg rounded-full p-3 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg rounded-full p-3 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
            
            <div className="flex justify-center mt-8 space-x-3">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentSlide ? 'bg-red-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Entdecken Sie KAIZEN</h2>
            <p className="text-xl text-gray-600 font-light">Lernen Sie uns und unsere Arbeit kennen</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-black overflow-hidden aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all duration-300 hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Der Begriff <strong className="text-red-600 font-medium">KAIZEN</strong> kommt aus der japanischen Lebensphilosophie und bedeutet wörtlich übersetzt "Wandel zum Besseren" (KAI = Wandel; ZEN = zum Besseren).
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Dieser ewig andauernde Prozess der Veränderung bietet grenzenloses Potential nach Oben.
                </p>
                <p className="text-black text-xl leading-relaxed font-medium">
                  Wir l(i)eben diesen Wandel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Unsere Werte</h2>
            <p className="text-xl text-gray-600 font-light">Was uns antreibt und auszeichnet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Happypappy */}
            <div className="bg-white border-l-4 border-red-600 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-red-600 mb-4">#Happypappy</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                Wir schenken ein ehrliches Lächeln, Spaß und strahlende Positivität.
              </p>
            </div>
            
            {/* sexymexy */}
            <div className="bg-white border-l-4 border-black p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">#sexymexy</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-2">
                <strong className="text-black">sexy</strong> = WOW-Typen
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                <strong className="text-black">mexy</strong> = KAIZEN-Mentalität
              </p>
            </div>
            
            {/* playhardplayhard */}
            <div className="bg-white border-l-4 border-red-600 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-red-600 mb-4">#playhardplayhard</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                Wir kennen das Wort "Arbeit" nicht. #playhardplayhard steht für Lifebalance, inspirierende Energie und Champagner-Performance.
              </p>
            </div>
            
            {/* kiss */}
            <div className="bg-white border-l-4 border-black p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">#kiss</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                Keep it simple and stupid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Google Bewertungen</h2>
            <p className="text-xl text-gray-600 font-light">Was unsere Kunden über uns sagen</p>
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-red-600 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.8</span>
                <span className="text-gray-600">({reviews.length} Bewertungen)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
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
                        <p className="text-xs text-gray-500">✓ Verifizierte Bewertung</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-red-600 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed font-light">"{review.text}"</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://maps.app.goo.gl/TbZnjgiQpPWsxxw89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 px-8 py-3 text-gray-700 transition-colors duration-300"
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
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für eine Zusammenarbeit?</h2>
          <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
            Kontaktieren Sie uns noch heute und entdecken Sie, wie wir Ihr Unternehmen unterstützen können.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
