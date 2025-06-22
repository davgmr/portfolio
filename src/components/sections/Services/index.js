import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../../common/Container';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const projects = [
    {
      id: 1,
      title: "Mara, assistente virtual da UFMA",
      description: "Interface criada para a agente virtual da Universidade Federal do Maranhão.",
      image: "/images/projects/project-1.png",
      tech: ["Html5", "Css3", "JavaScript"],
      link: "https://portalpadrao.ufma.br/site"
    },
    {
      id: 2,
      title: "Plataforma Coopdelta",
      description: "Sistema de gestão desenvolvido para a Cooperativa Coopdelta, em Araioses - MA.",
      image: "/images/projects/project-2.png",
      tech: ["React", "Tailwind Css", "TypeScript"],
      link: "https://coopdelta.com.br"
    },
    {
      id: 3,
      title: "ArchVault", 
      description: "Ambiente digital para gerenciamento e circulação de conhecimento acadêmico, concebido para o OpenLab de IA do Núcleo de Pesquisa Baites.",
      image: "/images/projects/project-3.png",
      tech: ["React", "Node.js", "Prisma"],
      link: "https://archvault.ufma.br"
    }
  ];

  const technologies = [
    '/images/technologies/react.png',
    '/images/technologies/javascript.png', 
    '/images/technologies/html.png',
    '/images/technologies/css.png',
    '/images/technologies/tailwind.png',
    '/images/technologies/vite.png',
    '/images/technologies/git.png',
    '/images/technologies/figma.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getDatePart = () => {
    const options = {
      timeZone: 'America/Sao_Paulo',
      weekday: 'long',
      day: '2-digit',
      month: 'long'
    };
    return currentTime.toLocaleDateString('pt-BR', options);
  };

  const getTimePart = () => {
    const options = {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    return currentTime.toLocaleTimeString('pt-BR', options);
  };

  const openProject = (project) => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-white">
      <Container size="lg" className="max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-max lg:h-[540px]">
          
          <div className="lg:col-span-4 bg-neutral-50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-neutral-100 min-h-[320px] lg:h-auto">
            <div className="space-y-6">
              <h3 className="font-display text-lg md:text-xl font-light text-neutral-800 leading-relaxed">
                Desenvolvedor com mais de 2 anos construindo no espaço frontend.
              </h3>
              
              <p className="font-display text-sm text-neutral-600 leading-relaxed font-light">
                Se você está pensando em começar um novo projeto web, entre em contato para conversarmos sobre seus requisitos em mais detalhes.
              </p>
              
              <a 
                href="https://wa.me/5598981420180?text=Olá! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="font-display bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-normal hover:bg-neutral-800 transition-all duration-200 shadow-sm inline-block text-center"
              >
                Diga olá
              </a>
            </div>
            
            <div className="mt-8">
              <div className="font-display text-neutral-500 text-xs mb-1 font-light">
                {getDatePart()}
              </div>
              <div className="font-display text-neutral-800 text-2xl font-light tracking-wide">
                {getTimePart()}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm border border-neutral-100 min-h-[400px] lg:h-auto">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-lg md:text-xl font-light text-neutral-800">
                  Projetos Recentes
                </h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevProject}
                    className="p-2 rounded-full bg-white hover:bg-neutral-100 transition-all duration-200 shadow-sm border border-neutral-200"
                  >
                    <ChevronLeft size={18} className="text-neutral-600" />
                  </button>
                  <button 
                    onClick={nextProject}
                    className="p-2 rounded-full bg-white hover:bg-neutral-100 transition-all duration-200 shadow-sm border border-neutral-200"
                  >
                    <ChevronRight size={18} className="text-neutral-600" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-0 transition-all duration-500 ease-in-out">
                  <div 
                    className="w-full h-32 md:h-44 bg-neutral-200 rounded-2xl mb-4 border border-neutral-200 cursor-pointer overflow-hidden group"
                    onClick={() => openProject(projects[currentProject])}
                  >
                    <img 
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-neutral-500"><span class="text-sm">Imagem em breve</span></div>';
                      }}
                    />
                  </div>
                  
                  <h4 className="font-display text-base md:text-lg font-light text-neutral-800 mb-2">
                    {projects[currentProject].title}
                  </h4>
                  <p className="font-display text-neutral-600 mb-4 text-sm font-light leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="font-display px-3 py-1.5 bg-white text-neutral-600 text-xs rounded-full font-light border border-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {projects[currentProject].link && (
                    <button
                      onClick={() => openProject(projects[currentProject])}
                      className="mt-3 text-xs text-neutral-500 hover:text-neutral-700 transition-colors underline"
                    >
                      Ver projeto →
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center space-x-2 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject ? 'bg-neutral-600' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            
            <div className="bg-neutral-50 rounded-3xl p-4 md:p-6 h-[200px] md:h-[240px] overflow-hidden shadow-sm border border-neutral-100">
              <h4 className="font-display font-light text-neutral-800 mb-3 text-base md:text-lg">
                Desenvolvimento Web
              </h4>
              <p className="font-display text-sm text-neutral-600 mb-4 md:mb-5 font-light leading-relaxed">
                Sou um desenvolvedor focado em tecnologias web modernas.
              </p>
              
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex animate-scroll space-x-2 md:space-x-3">
                  {[...technologies, ...technologies].map((tech, index) => (
                    <div key={index} className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl p-1.5 md:p-2 shadow-sm border border-neutral-200">
                      <img 
                        src={tech}
                        alt="Technology"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-neutral-400 text-xs">?</div>';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-3xl p-4 md:p-6 h-[240px] md:h-[290px] relative overflow-hidden shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-light text-neutral-800 mb-3 text-base md:text-lg">
                  Design de Interface para IA
                </h4>
                <p className="font-display text-sm text-neutral-600 mb-4 md:mb-5 font-light leading-relaxed">
                  Criando interfaces intuitivas para ferramentas de IA. Facilitando a interação humano-máquina através do design.
                </p>
              </div>
              
              <div className="relative group flex justify-center">
                <div className="relative">
                  <img 
                    src="/images/technologies/ai-interface-logo.webp"
                    alt="IA Interface"
                    className="w-24 h-16 md:w-28 md:h-20 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center text-neutral-500 text-sm border-2 border-dashed border-neutral-300 rounded">Logo</div>';
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="animate-cursor-move w-3 h-3 bg-neutral-600 rounded-full opacity-60 absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes cursor-move {
          0%, 100% { transform: translate(8px, 5px); }
          25% { transform: translate(45px, 3px); }
          50% { transform: translate(35px, 25px); }
          75% { transform: translate(15px, 20px); }
        }
        
        @media (min-width: 768px) {
          @keyframes cursor-move {
            0%, 100% { transform: translate(10px, 8px); }
            25% { transform: translate(60px, 5px); }
            50% { transform: translate(50px, 35px); }
            75% { transform: translate(20px, 30px); }
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-cursor-move {
          animation: cursor-move 3s ease-in-out infinite;
        }

        button:focus,
        a:focus,
        *:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;