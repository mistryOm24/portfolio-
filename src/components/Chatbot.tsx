"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: portfolioData.chatbot.greeting, isBot: true }
  ]);
  const [input, setInput] = useState("");

  const { responses } = portfolioData.chatbot;

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    const key = Object.keys(responses).find(k => input.toLowerCase().includes(k));
    const response = key ? responses[key as keyof typeof responses] : "That's interesting! Feel free to explore the portfolio or ask about Om's skills, projects, or experience.";
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
    
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 h-96 glass-strong rounded-2xl flex flex-col animate-fade-in-up">
          <div className="p-4 border-b border-white/10">
            <h3 className="font-semibold gradient-text">Chat with Om's AI</h3>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.isBot 
                    ? 'bg-blue-500/20 text-white' 
                    : 'bg-purple-500/20 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm hover-lift"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover-lift hover-glow animate-float"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}