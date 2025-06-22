import React, { useState, useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';

const DaviBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // 5 piadas sobre IA programadas
  const aiJokes = [
    "Por que a IA foi ao psicólogo? Porque estava com problemas de deep learning! 🤖😄",
    "O que a rede neural disse para a outra? 'Você me faz perder todos os meus pesos!' 💕🧠",
    "Por que o algoritmo de machine learning terminou o namoro? Porque não conseguia fazer uma boa predição do futuro! 💔📊",
    "Qual é o doce favorito da inteligência artificial? Cookies! 🍪💻",
    "Por que a IA nunca fica estressada? Porque ela sempre encontra a solução ótima! 😌⚡"
  ];

  // Rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Adicionar mensagem inicial quando abre
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Olá! Eu sou o Davi Bot! 🤖 Mande qualquer mensagem e eu te conto uma piada sobre IA!",
          isBot: true,
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular delay de digitação
    setTimeout(() => {
      const randomJoke = aiJokes[Math.floor(Math.random() * aiJokes.length)];
      const botMessage = {
        id: Date.now() + 1,
        text: randomJoke,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-lg border border-neutral-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-neutral-50 p-4 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/davi-bot-avatar.png"
                alt="Davi Bot"
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">DB</div>';
                }}
              />
              <div>
                <h3 className="font-display text-sm font-medium text-neutral-900">Davi Bot</h3>
                <p className="font-display text-xs text-neutral-500">IA Humorista</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-neutral-200 transition-colors"
            >
              <X size={16} className="text-neutral-600" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="text-neutral-400 text-sm font-light">
                  Nenhuma mensagem
                </div>
                <div className="text-neutral-500 text-xs mt-1">
                  As mensagens da equipe serão exibidas aqui
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-neutral-100 text-neutral-800'
                      : 'bg-neutral-900 text-white'
                  }`}
                >
                  <p className="font-display text-sm font-light leading-relaxed">
                    {message.text}
                  </p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-neutral-500' : 'text-neutral-300'
                  }`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 text-neutral-800 max-w-xs p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-neutral-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Envie uma mensagem"
                className="flex-1 px-3 py-2 border border-neutral-200 rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      >
        {isOpen ? (
          <X size={26} className="group-hover:scale-110 transition-transform" />
        ) : (
          <img 
            src="/images/davi-bot-avatar.png"
            alt="Davi Bot"
            className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">🤖</div>';
            }}
          />
        )}
      </button>
    </div>
  );
};

export default DaviBot;