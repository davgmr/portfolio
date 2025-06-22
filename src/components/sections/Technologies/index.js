import React, { useEffect, useRef, useState } from 'react';
import Container from '../../common/Container';

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTextClasses = () => {
    return `font-display font-light transition-all duration-[2000ms] ease-out ${
      isVisible 
        ? 'text-primary-900 md:text-primary-900' 
        : 'text-primary-600 md:text-primary-400'
    }`;
  };

  return (
    <section id="technologies" className="min-h-screen flex items-center bg-neutral-100" ref={sectionRef}>
      <Container>
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Título da seção */}
          <div className="mb-12">
            <h3 className={`font-display text-lg font-medium ${getTextClasses()} mb-4`}>
              Estratégia
            </h3>
          </div>

          {/* Conteúdo principal */}
          <div className="space-y-8">
            <p 
              className={`text-2xl lg:text-3xl leading-relaxed ${getTextClasses()}`}
              style={{ transitionDelay: '200ms' }}
            >
              Deixe seu site rápido, acessível e preparado para o futuro, utilizando 
              tecnologias e padrões modernos da web para criar uma experiência que 
              funcione perfeitamente em qualquer navegador ou dispositivo.
            </p>
            
            <p 
              className={`text-lg leading-relaxed ${getTextClasses()}`}
              style={{ transitionDelay: '600ms' }}
            >
              Seja um site institucional, um MVP para seu novo projeto SaaS ou um 
              aplicativo web totalmente personalizado, eu ofereço um processo de 
              desenvolvimento sob medida, com desempenho e usabilidade como pilares centrais.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;