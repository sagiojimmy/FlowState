import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getGeminiAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the FlowState Process Consultant. Describe your biggest team bottleneck (e.g., 'We have too many meetings' or 'Deadlines keep slipping'), and I'll identify which of the 7 mistakes you're making." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const advice = await getGeminiAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] border border-slate-700">
      <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">AI Process Audit</h3>
          <p className="text-indigo-100 text-xs">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-800/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'model' ? 'bg-indigo-500' : 'bg-slate-600'}`}>
              {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'model' 
                ? 'bg-slate-700 text-slate-100 rounded-tl-none' 
                : 'bg-indigo-600 text-white rounded-tr-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="animate-spin w-4 h-4 text-indigo-400" />
              <span className="text-slate-400 text-xs">Analyzing workflow...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-700">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="E.g., My team never knows who is doing what..."
            className="w-full bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-xl py-4 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
