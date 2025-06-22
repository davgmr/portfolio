import React, { useEffect, useRef, useState } from 'react';
import Container from '../../common/Container';
import { CONTENT } from '../../../constants';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Trigger mais sensível para mobile
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

  // Função para gerar classes condicionais
  const getTextClasses = () => {
    return `font-display font-light transition-all duration-[2000ms] ease-out ${
      isVisible 
        ? 'text-neutral-800 md:text-neutral-800' 
        : 'text-neutral-500 md:text-neutral-400'
    }`;
  };

  const getGridItemClasses = () => {
    return `font-display font-light transition-all duration-[2000ms] ease-out ${
      isVisible 
        ? 'text-neutral-800 md:text-neutral-800' 
        : 'text-neutral-500 md:text-neutral-400'
    }`;
  };

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <Container>
        <div className="w-full max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-light text-neutral-800 mb-6">
              {CONTENT.about.title}
            </h2>
          </div>

          {/* Conteúdo principal com animação */}
          <div className="space-y-8 text-lg leading-relaxed text-left">
            {CONTENT.about.description.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className={getTextClasses()}
                style={{
                  transitionDelay: `${index * 800}ms`
                }}
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Grid de informações */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200">
            <div 
              className={getGridItemClasses()} 
              style={{ transitionDelay: '1600ms' }}
            >
              <h3 className="font-medium mb-3 text-neutral-800">Experiência</h3>
              <p className="text-neutral-600 font-light">
                {new Date().getFullYear() - 2023}+ anos criando interfaces modernas e performáticas
              </p>
            </div>
            
            <div 
              className={getGridItemClasses()} 
              style={{ transitionDelay: '2000ms' }}
            >
              <h3 className="font-medium mb-3 text-neutral-800">Graduação</h3>
              <p className="text-neutral-600 font-light">
                Graduando em Ciência e Tecnologia na Federal do Maranhão
              </p>
            </div>
            
            <div 
              className={getGridItemClasses()} 
              style={{ transitionDelay: '2400ms' }}
            >
              <h3 className="font-medium mb-3 text-neutral-800">Disponibilidade</h3>
              <p className="text-neutral-600 font-light">
                Trabalho de forma remota ou presencial e estou disponível para projetos globais
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;