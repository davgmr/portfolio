import React from 'react';
import { ArrowDown } from 'lucide-react';
import { CONTENT, PERSONAL_INFO } from '../../../constants';

const Hero = () => {
  const handleAboutClick = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-neutral-50 relative">
      {/* Badge no canto superior esquerdo */}
      <div className="absolute top-24 left-12 lg:left-16 xl:left-24 z-10">
        <div className="flex items-center space-x-2 text-xs text-primary-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="font-display font-medium">Aberto para novos projetos</span>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-2 min-h-screen">
        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex items-center justify-start px-12 lg:px-16 xl:px-24 py-16 pt-32 min-h-[60vh] lg:min-h-screen">
          <div className="space-y-8">
            {/* Headline Principal */}
            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-6xl font-normal text-primary-900 leading-tight text-left max-w-2xl m-0 p-0">
                {CONTENT.hero.headline}
              </h1>
              
              <p className="font-display text-lg text-primary-600 leading-relaxed font-normal max-w-lg">
                {CONTENT.hero.subheadline}
              </p>
            </div>
            
            {/* Botão CTA */}
            <div className="pt-4">
              <a 
                href="https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="font-display inline-flex items-center px-10 py-5 bg-primary-900 text-white font-medium text-base tracking-wide hover:bg-primary-800 transition-colors duration-200 rounded-full"
              >
                Saiba mais
              </a>
            </div>

            {/* Links e Download - Movidos para baixo */}
            <div className="pt-24 space-y-3">
              <div className="flex items-center flex-wrap gap-1 text-sm text-primary-600">
                <span className="font-display">Encontre-me em</span>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-blue-600 hover:text-blue-800 transition-colors underline mx-1"
                >
                  GitHub
                </a>
                <span className="font-display">e</span>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-blue-600 hover:text-blue-800 transition-colors underline ml-1"
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="text-sm text-primary-600">
                <span className="font-display">Baixar meu </span>
                <a 
                  href="/curriculo.pdf"
                  download
                  className="font-display text-blue-600 hover:text-blue-800 transition-colors underline"
                >
                  currículo
                </a>
                <span className="font-display"> (PDF 918kb)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="relative bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 min-h-[50vh] lg:min-h-screen">
          {/* Imagem principal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/images/hero-profile.jpg" 
              alt="Desenvolvedor trabalhando"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
        <button 
          onClick={handleAboutClick}
          className="text-primary-400 hover:text-primary-600 transition-colors"
          aria-label="Scroll para baixo"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;