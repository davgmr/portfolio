# Portfolio - Davi Guimarães

<div align="center">
  <img src="public/images/davi-bot-avatar.png" alt="Davi Guimarães" width="120" height="120" style="border-radius: 50%;">
  
  **Desenvolvedor Frontend especializado em React, TypeScript e interfaces modernas**
  
  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fdaviguimaraes.dev&style=for-the-badge)](https://daviguimaraes.dev)
  [![GitHub](https://img.shields.io/github/followers/davgmr?style=for-the-badge&logo=github)](https://github.com/davgmr)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/davi-guimarãesdev/)
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Demonstração](#-demonstração)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🚀 Sobre o Projeto

Este é meu portfolio pessoal desenvolvido em React, criado para apresentar meus projetos, habilidades e experiência como desenvolvedor frontend. O site conta com design moderno, interface interativa e funcionalidades únicas como sistema de personalização de temas e chatbot com IA.

### 🎯 Objetivos

- Apresentar projetos e experiência profissional
- Demonstrar habilidades técnicas e de design
- Facilitar contato direto via WhatsApp
- Oferecer experiência interativa e personalizável

---

## ✨ Funcionalidades

### 🎨 **Sistema de Personalização**
- **3 Paletas de Cores**: Default, Dark Mode, High Contrast (acessibilidade)
- **Múltiplas Fontes**: Space Grotesk, Inter, Comic Neue
- **Aplicação Global**: Mudanças afetam todo o site em tempo real
- **Transições Suaves**: Animações elegantes entre mudanças

### 🤖 **Davi Bot - Chatbot Interativo**
- Chatbot personalizado com 5 piadas sobre IA
- Interface de chat em tempo real
- Animações de digitação
- Design responsivo e acessível

### 📱 **Contato Direto**
- Integração completa com WhatsApp
- Links diretos em múltiplos pontos do site
- Mensagens pré-definidas para facilitar o contato

### 🎯 **Seções Principais**
- **Hero**: Apresentação principal com CTA
- **Sobre**: Informações pessoais e profissionais
- **Projetos**: Carrossel interativo com projetos reais
- **Tecnologias**: Animação de tecnologias e estratégia
- **Personalização**: Controles de tema e fonte

### ⚡ **Performance e UX**
- Design responsivo para todos os dispositivos
- Animações suaves e micro-interações
- Carregamento otimizado de imagens
- Navegação intuitiva com scroll suave

---

## 🛠 Tecnologias

### **Frontend**
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

### **Ferramentas de Desenvolvimento**
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

### **Deploy e Hospedagem**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)

---

## 🎥 Demonstração

### 📸 **Screenshots**

<details>
<summary>🖼️ Ver capturas de tela</summary>

#### Página Principal
![Homepage](docs/screenshots/homepage.png)

#### Sistema de Personalização
![Customization](docs/screenshots/customization.png)

#### Projetos
![Projects](docs/screenshots/projects.png)

#### Chatbot
![Chatbot](docs/screenshots/chatbot.png)

</details>

### 🌐 **Demo Online**
**[🔗 Acessar Site](https://daviguimaraes.dev)**

---

## 📦 Instalação

### **Pré-requisitos**
- Node.js (versão 16.x ou superior)
- npm ou yarn
- Git

### **Clone o Repositório**
```bash
git clone https://github.com/davgmr/portfolio.git
cd portfolio
```

### **Instale as Dependências**
```bash
# Com npm
npm install

# Com yarn
yarn install
```

### **Execute o Projeto**
```bash
# Modo desenvolvimento
npm start
# ou
yarn start

# O projeto será aberto em http://localhost:3000
```

---

## 🎮 Como Usar

### **Navegação**
1. **Scroll ou Menu**: Use o menu superior ou scroll para navegar pelas seções
2. **Projetos**: Clique nas setas para navegar pelo carrossel de projetos
3. **Personalização**: Acesse a seção "Personalizar" para mudar temas e fontes

### **Chatbot**
1. **Ativar**: Clique na bolinha do Davi Bot no canto inferior direito
2. **Interagir**: Digite qualquer mensagem para receber uma piada sobre IA
3. **Fechar**: Clique no X ou na bolinha novamente

### **Contato**
- **WhatsApp**: Todos os botões de contato direcionam para o WhatsApp
- **Projetos**: Clique em "Ver projeto" para acessar os links dos projetos
- **Social**: Links para GitHub e LinkedIn no footer

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Imagens dos projetos
│   │   ├── technologies/      # Logos das tecnologias
│   │   └── davi-bot-avatar.png
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/           # Componentes reutilizáveis
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Container/
│   │   │   └── DaviBot/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── sections/         # Seções da página
│   │       ├── Hero/
│   │       ├── About/
│   │       ├── Services/
│   │       ├── Technologies/
│   │       └── Contact/
│   ├── constants/            # Constantes e configurações
│   │   └── index.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── docs/                     # Documentação
├── README.md
├── package.json
└── tailwind.config.js
```

---

## 🚀 Deploy

### **Build de Produção**
```bash
# Criar build otimizada
npm run build

# Testar build localmente
npx serve -s build
```

### **Deploy na Vercel**
1. **Conectar GitHub**: Faça login na Vercel e conecte o repositório
2. **Configurar**: A Vercel detecta automaticamente o projeto React
3. **Deploy**: O deploy acontece automaticamente a cada push na main

### **Deploy na Netlify**
1. **Drag & Drop**: Arraste a pasta `build` para o Netlify
2. **Git Integration**: Ou conecte o repositório GitHub
3. **Configurações**: Build command: `npm run build`, Publish directory: `build`

### **Variáveis de Ambiente**
Caso precise de variáveis de ambiente, crie um arquivo `.env`:
```env
REACT_APP_WHATSAPP_NUMBER=5598981420180
REACT_APP_EMAIL=davrmg@gmail.com
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### **Diretrizes de Contribuição**
- Siga os padrões de código existentes
- Adicione comentários quando necessário
- Teste suas mudanças antes de submeter
- Atualize a documentação se necessário

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 Davi Guimarães

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contato

<div align="center">

**Davi Guimarães**

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5598981420180?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:davrmg@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davi-guimarãesdev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/davgmr)

**📍 Maranhão, Brasil**

</div>

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

*Desenvolvido com ❤️ por [Davi Guimarães](https://github.com/davgmr)*

</div>
