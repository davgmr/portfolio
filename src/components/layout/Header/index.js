import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../../common/Container';
import { NAVIGATION, PERSONAL_INFO } from '../../../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    
    // Se for contato, abre WhatsApp
    if (href === '#contact') {
      window.open('https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto.', '_blank');
      return;
    }
    
    // Caso contrário, faz scroll normal
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 translate-y-0 opacity-100 shadow-sm' 
          : 'bg-transparent -translate-y-full opacity-0 shadow-none'
      }`}
      style={{
        transform: isScrolled ? 'translateY(0px)' : 'translateY(-100%)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Nome */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('#hero')}
              className="font-display text-xl font-light text-neutral-800 hover:text-neutral-600 transition-colors"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.slice(1).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="font-display text-neutral-600 hover:text-neutral-800 font-light transition-colors duration-200 text-sm tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* WhatsApp */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-neutral-500 hover:text-neutral-700 text-sm font-light transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.slice(1).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-left text-neutral-600 hover:text-neutral-800 font-light transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <a 
                  href="https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-neutral-500 hover:text-neutral-700 text-sm font-light"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;