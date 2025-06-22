import React, { useState, useEffect } from 'react';
import Container from '../../common/Container';

// Opções de fontes (3 opções)
const fonts = [
  { name: 'Space Grotesk', display: 'Space Grotesk', value: 'Space Grotesk, Inter, system-ui, sans-serif' },
  { name: 'Inter', display: 'Inter', value: 'Inter, system-ui, sans-serif' },
  { name: 'Comic Neue', display: 'Comic Neue', value: 'Comic Neue, cursive' }
];

// Opções de paletas (3 opções)
const palettes = [
  {
    name: 'default',
    label: 'Padrão',
    colors: ['#475569', '#64748b', '#f8fafc'],
    description: 'O esquema de cores clássico e elegante que mantém perfeita legibilidade e sofisticação.',
    cssVars: {
      '--primary-50': '#f8fafc',
      '--primary-100': '#f1f5f9',
      '--primary-200': '#e2e8f0',
      '--primary-300': '#cbd5e1',
      '--primary-400': '#94a3b8',
      '--primary-500': '#64748b',
      '--primary-600': '#475569',
      '--primary-700': '#334155',
      '--primary-800': '#1e293b',
      '--primary-900': '#0f172a',
      '--neutral-50': '#f8fafc',
      '--neutral-100': '#f1f5f9',
      '--neutral-200': '#e2e8f0',
      '--neutral-300': '#cbd5e1',
      '--neutral-400': '#94a3b8',
      '--neutral-500': '#64748b',
      '--neutral-600': '#475569',
      '--neutral-700': '#334155',
      '--neutral-800': '#1e293b',
      '--neutral-900': '#0f172a'
    }
  },
  {
    name: 'dark',
    label: 'Escuro',
    colors: ['#ffffff', '#9ca3af', '#000000'],
    description: 'Um modo escuro sofisticado que reduz o cansaço visual mantendo a mesma elegância sutil.',
    cssVars: {
      '--primary-50': '#000000',
      '--primary-100': '#1a1a1a',
      '--primary-200': '#2d2d2d',
      '--primary-300': '#404040',
      '--primary-400': '#737373',
      '--primary-500': '#a3a3a3',
      '--primary-600': '#d4d4d4',
      '--primary-700': '#e5e5e5',
      '--primary-800': '#f5f5f5',
      '--primary-900': '#ffffff',
      '--neutral-50': '#000000',
      '--neutral-100': '#1a1a1a',
      '--neutral-200': '#2d2d2d',
      '--neutral-300': '#404040',
      '--neutral-400': '#737373',
      '--neutral-500': '#a3a3a3',
      '--neutral-600': '#d4d4d4',
      '--neutral-700': '#e5e5e5',
      '--neutral-800': '#f5f5f5',
      '--neutral-900': '#ffffff'
    }
  },
  {
    name: 'accessibility',
    label: 'Alto Contraste',
    colors: ['#92400e', '#f59e0b', '#fef3c7'],
    description: 'Acessibilidade aprimorada com tons amarelos de alto contraste para melhor legibilidade e clareza visual.',
    cssVars: {
      '--primary-50': '#fefcf0',
      '--primary-100': '#fef3c7',
      '--primary-200': '#fde68a',
      '--primary-300': '#fcd34d',
      '--primary-400': '#fbbf24',
      '--primary-500': '#f59e0b',
      '--primary-600': '#d97706',
      '--primary-700': '#b45309',
      '--primary-800': '#92400e',
      '--primary-900': '#78350f',
      '--neutral-50': '#fefcf0',
      '--neutral-100': '#fef9e7',
      '--neutral-200': '#fef3c7',
      '--neutral-300': '#fde68a',
      '--neutral-400': '#fcd34d',
      '--neutral-500': '#f59e0b',
      '--neutral-600': '#d97706',
      '--neutral-700': '#b45309',
      '--neutral-800': '#92400e',
      '--neutral-900': '#78350f'
    }
  }
];

const Contact = () => {
  const [selectedFont, setSelectedFont] = useState('Space Grotesk');
  const [selectedPalette, setSelectedPalette] = useState('default');

  // Aplicar mudanças no documento
  useEffect(() => {
    const root = document.documentElement;
    const currentPalette = palettes.find(p => p.name === selectedPalette);
    
    if (currentPalette && currentPalette.cssVars) {
      // Aplicar todas as variáveis CSS da paleta
      Object.entries(currentPalette.cssVars).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    }
    
    // Aplicar fonte
    const currentFont = fonts.find(f => f.name === selectedFont);
    if (currentFont && currentFont.value) {
      root.style.setProperty('--main-font', currentFont.value);
    }
  }, [selectedFont, selectedPalette]);

  const currentPalette = palettes.find(p => p.name === selectedPalette);

  if (!currentPalette) {
    return null; // ou um loading/erro
  }

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col justify-center transition-colors duration-500 bg-white"
    >
      <Container>
        <div className="max-w-5xl mx-auto w-full py-12 md:py-16">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 
              className="font-display text-4xl md:text-5xl font-light mb-4 transition-colors duration-500"
              style={{ color: currentPalette.cssVars['--neutral-900'] }}
            >
              Personalizar
            </h1>
            <p 
              className="font-display text-lg font-light leading-relaxed max-w-2xl mx-auto transition-colors duration-500"
              style={{ color: currentPalette.cssVars['--neutral-600'] }}
            >
              Personalize sua experiência na web usando as ferramentas abaixo.<br />
              Mais recursos e opções de personalização em breve.
            </p>
          </div>

          {/* Controles de Personalização - Cards Maiores */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">
              
              {/* Controle de Fonte - Card Menor */}
              <div 
                className="bg-neutral-50 rounded-3xl p-8 shadow-sm border border-neutral-100 transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div 
                    className="text-6xl font-light mb-4 transition-colors duration-500 text-neutral-800"
                  >
                    Aa
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-light text-neutral-800">
                    Tipografia
                  </h3>
                  <p className="font-display text-base font-light leading-relaxed text-neutral-600">
                    Você está visualizando a fonte {selectedFont}
                    {selectedFont === 'Comic Neue' && ' 🤪'}.
                  </p>
                  
                  {/* Seletor de Fonte */}
                  <div className="grid grid-cols-3 gap-1 pt-2">
                    {fonts.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => setSelectedFont(font.name)}
                        className="p-2 rounded-xl text-xs font-medium transition-all duration-200 bg-white hover:bg-neutral-100 shadow-sm border border-neutral-200"
                      >
                        <span className="text-neutral-700" style={{ fontFamily: font.value }}>
                          {font.name === 'Comic Neue' ? 'Comic' : font.display}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Controle de Paleta - Card Menor */}
              <div 
                className="bg-neutral-50 rounded-3xl p-8 shadow-sm border border-neutral-100 transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center space-x-3 mb-4">
                    {currentPalette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-light text-neutral-800">
                    Paleta
                  </h3>
                  <p className="font-display text-base font-light leading-relaxed text-neutral-600">
                    {currentPalette.description}
                  </p>
                  
                  {/* Seletor de Paleta */}
                  <div className="grid grid-cols-3 gap-1 pt-2">
                    {palettes.map((palette) => (
                      <button
                        key={palette.name}
                        onClick={() => setSelectedPalette(palette.name)}
                        className="p-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-center space-x-1 bg-white hover:bg-neutral-100 shadow-sm border border-neutral-200"
                      >
                        <div className="flex space-x-1">
                          {palette.colors.slice(0, 2).map((color, index) => (
                            <div
                              key={index}
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <span className="text-neutral-700">{palette.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx global>{`
        :root {
          --main-font: ${fonts.find(f => f.name === selectedFont)?.value || 'Space Grotesk, Inter, system-ui, sans-serif'};
        }
        
        .font-display {
          font-family: var(--main-font) !important;
        }
        
        body {
          font-family: var(--main-font) !important;
          background-color: ${currentPalette.cssVars['--neutral-50']} !important;
          color: ${currentPalette.cssVars['--neutral-900']} !important;
          transition: all 0.5s ease !important;
        }

        /* Override Tailwind classes globally */
        .bg-white {
          background-color: ${selectedPalette === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
        }
        
        .bg-neutral-50 {
          background-color: ${currentPalette.cssVars['--neutral-50']} !important;
        }
        
        .bg-neutral-100 {
          background-color: ${selectedPalette === 'dark' ? '#1a1a1a' : currentPalette.cssVars['--neutral-100']} !important;
        }
        
        .bg-neutral-200 {
          background-color: ${currentPalette.cssVars['--neutral-200']} !important;
        }
        
        .bg-primary-900 {
          background-color: ${selectedPalette === 'dark' ? '#000000' : currentPalette.cssVars['--primary-900']} !important;
        }
        
        .text-neutral-600 {
          color: ${currentPalette.cssVars['--neutral-600']} !important;
        }
        
        .text-neutral-700 {
          color: ${currentPalette.cssVars['--neutral-700']} !important;
        }
        
        .text-neutral-800 {
          color: ${currentPalette.cssVars['--neutral-800']} !important;
        }
        
        .text-neutral-900 {
          color: ${currentPalette.cssVars['--neutral-900']} !important;
        }
        
        .text-primary-600 {
          color: ${currentPalette.cssVars['--primary-600']} !important;
        }
        
        .text-primary-700 {
          color: ${currentPalette.cssVars['--primary-700']} !important;
        }
        
        .text-primary-900 {
          color: ${currentPalette.cssVars['--primary-900']} !important;
        }
        
        .border-neutral-200 {
          border-color: ${selectedPalette === 'dark' ? '#2d2d2d' : currentPalette.cssVars['--neutral-200']} !important;
        }
        
        .border-neutral-400 {
          border-color: ${currentPalette.cssVars['--neutral-400']} !important;
        }
        
        .border-primary-200 {
          border-color: ${currentPalette.cssVars['--primary-200']} !important;
        }

        /* Cards e componentes */
        .bg-neutral-50, .bg-gray-50 {
          background-color: ${currentPalette.cssVars['--neutral-50']} !important;
        }

        /* Headers e elementos principais */
        header {
          background-color: ${selectedPalette === 'dark' ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)'} !important;
          backdrop-filter: blur(8px) !important;
        }

        /* Footer */
        footer {
          background-color: ${selectedPalette === 'dark' ? '#000000' : currentPalette.cssVars['--primary-900']} !important;
        }

        /* Botões */
        .bg-neutral-900 {
          background-color: ${selectedPalette === 'dark' ? '#ffffff' : currentPalette.cssVars['--neutral-900']} !important;
          color: ${selectedPalette === 'dark' ? '#000000' : '#ffffff'} !important;
        }

        /* Hover states */
        .hover\\:bg-neutral-800:hover {
          background-color: ${selectedPalette === 'dark' ? '#f5f5f5' : currentPalette.cssVars['--neutral-800']} !important;
        }

        .hover\\:bg-neutral-100:hover {
          background-color: ${selectedPalette === 'dark' ? '#2d2d2d' : currentPalette.cssVars['--neutral-100']} !important;
        }

        .hover\\:bg-neutral-200:hover {
          background-color: ${selectedPalette === 'dark' ? '#404040' : currentPalette.cssVars['--neutral-200']} !important;
        }

        .hover\\:text-neutral-900:hover {
          color: ${currentPalette.cssVars['--neutral-900']} !important;
        }

        /* Inputs e forms */
        input, textarea {
          background-color: ${selectedPalette === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
          border-color: ${selectedPalette === 'dark' ? '#2d2d2d' : currentPalette.cssVars['--neutral-200']} !important;
          color: ${currentPalette.cssVars['--neutral-900']} !important;
        }

        /* Transições suaves para tudo */
        * {
          transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;