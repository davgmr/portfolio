export const PERSONAL_INFO = {
  name: "Davi Guimarães",
  email: "davrmg@gmail.com",
  phone: "+55 (98) 98981420180",
  linkedin: "https://www.linkedin.com/in/davi-guimarãesdev/",
  github: "https://github.com/davgmr",
  location: "São Luís, Maranhão"
};

export const CONTENT = {
  hero: {
    headline: "Traduzo ideias em experiencias digitais.",
    subheadline: "Sou um desenvolvedor frontend construindo interfaces web focadas em desempenho, usabilidade e tecnologias.",
    callToAction: "Crio interfaces que conectam pessoas, negócios e tecnologias — inclusive inteligência artificial."
  },
  
  about: {
    title: "Quem Sou",
    description: `Me chamo Davi Guimarães e sou desenvolvedor apaixonado por construir interfaces digitais que unem tecnologia e performance. Minha missão é transformar projetos em experiências intuitivas, responsivas e eficientes.

    Ao longo da minha trajetória, venho ajudando empresas e profissionais a criarem produtos digitais robustos, seja para plataformas web, sistemas institucionais ou soluções inovadoras. Nos últimos anos, também venho explorando a intersecção entre desenvolvimento e inteligência artificial, criando interfaces que facilitam a interação com sistemas baseados em Inteligencia Artificial Generativa, como chatbots, assistentes virtuais e ferramentas interativas com LLMs.`
  },
  
  services: {
    title: "O Que Eu Faço",
    description: "Desenvolvimento de interfaces web, criação de experiências digitais e implementação de soluções escaláveis. Atuo desde a prototipação até o desenvolvimento final, alinhando estética, usabilidade e tecnologia.",
    areas: [
      "Sistemas web",
      "Dashboards interativos", 
      "E-commerces e landing pages",
      "Interfaces para chatbots, assistentes virtuais e ferramentas baseadas em IA"
    ]
  },

  process: {
    title: "Meu Processo",
    steps: [
      {
        number: "01",
        title: "Entendimento",
        description: "Alinho objetivos, público e necessidades."
      },
      {
        number: "02", 
        title: "Prototipação",
        description: "Transformo ideias em wireframes e protótipos navegáveis."
      },
      {
        number: "03",
        title: "Desenvolvimento", 
        description: "Implemento o front-end utilizando tecnologias modernas e melhores práticas."
      },
      {
        number: "04",
        title: "Testes e Entrega",
        description: "Valido responsividade, acessibilidade, desempenho e integração com APIs e backends."
      },
      {
        number: "05",
        title: "Otimização Contínua",
        description: "Após a entrega, acompanho, monitoro e aprimoro a performance e a experiência."
      }
    ]
  },

  principles: {
    title: "Meus Princípios",
    items: [
      {
        title: "Performance",
        description: "Interfaces rápidas, leves e escaláveis."
      },
      {
        title: "Usabilidade",
        description: "Experiências intuitivas, acessíveis e centradas no usuário."
      },
      {
        title: "Escalabilidade", 
        description: "Arquitetura modular, fácil de manter e evoluir."
      },
      {
        title: "Qualidade",
        description: "Código limpo, bem documentado e alinhado às melhores práticas."
      }
    ]
  }
};

export const TECHNOLOGIES = {
  frontend: {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Vite"]
  },
  architecture: {
    title: "Arquitetura", 
    items: ["Componentização", "Design System"]
  },
  integrations: {
    title: "Integrações",
    items: ["APIs REST", "WebSocket (tempo real)", "APIs de IA generativa"]
  },
  tools: {
    title: "Ferramentas",
    items: ["Git", "Figma", "Canva", "Vercel"]
  }
};

export const NAVIGATION = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#services" },
  { name: "Tecnologias", href: "#technologies" },
  { name: "Contato", href: "#contact" }
];