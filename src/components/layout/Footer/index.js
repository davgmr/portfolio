import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import Container from '../../common/Container';
import { PERSONAL_INFO, NAVIGATION } from '../../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
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
    <footer className="py-16 md:py-20 bg-neutral-100 border-t border-neutral-200 transition-all duration-500">
      <Container>
        <div className="space-y-12">
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* CTA Principal */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3xl font-light text-neutral-900 max-w-2xl mx-auto leading-relaxed">
                É hora de construir seu próximo projeto web.<br />
                Vamos trabalhar juntos e alcançar o sucesso.
              </h2>
              <a 
                href="https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="font-display inline-block text-lg text-neutral-700 hover:text-neutral-900 transition-colors border-b border-neutral-400 hover:border-neutral-900 font-light"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
              {NAVIGATION.slice(1).map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-light"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/curriculo.pdf"
                download
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="Download CV"
              >
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-neutral-200">
            <p className="font-display text-neutral-500 text-sm font-light">
              © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;