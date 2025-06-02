
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('DE');
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', nameDE: 'Startseite' },
    { name: 'Partnership', path: '/partnership', nameDE: 'Partnerschaft' },
    { name: 'Mitspieler', path: '/mitspieler', nameDE: 'Mitspieler' },
    { name: 'About Us', path: '/about', nameDE: 'Über uns' },
    { name: 'Services', path: '/services', nameDE: 'Leistungen' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'DE' ? 'EN' : 'DE');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/90ba3f54-e57c-4db9-8bbf-e225c1b46d40.png" 
                alt="KAIZEN Personalagentur Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-black hover:text-red-600'
                  }`}
                >
                  {language === 'DE' ? item.nameDE : item.name}
                </Link>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-black hover:text-red-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{language}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-red-600'
                      : 'text-black hover:text-red-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'DE' ? item.nameDE : item.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-black hover:text-red-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{language}</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/90ba3f54-e57c-4db9-8bbf-e225c1b46d40.png" 
                  alt="KAIZEN Personalagentur Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4">
                {language === 'DE' 
                  ? 'Ihre professionelle Personalagentur für Events, Gastronomie und mehr.'
                  : 'Your professional staffing agency for events, gastronomy and more.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'DE' ? 'Kontakt' : 'Contact'}
              </h3>
              <p className="text-gray-300 mb-2">info@kaizen-personalagentur.de</p>
              <p className="text-gray-300">+49 (0) 123 456 789</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'DE' ? 'Rechtliches' : 'Legal'}
              </h3>
              <div className="space-y-2">
                <Link to="/imprint" className="block text-gray-300 hover:text-white transition-colors">
                  {language === 'DE' ? 'Impressum' : 'Imprint'}
                </Link>
                <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                  {language === 'DE' ? 'Datenschutz' : 'Privacy Policy'}
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 KAIZEN Personalagentur. {language === 'DE' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
