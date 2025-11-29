import React, { useState } from 'react';
import { Mistake } from '../types';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface Props {
  data: Mistake;
}

export const MistakeCard: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = data.icon;

  return (
    <div 
      className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'shadow-xl border-indigo-200 ring-1 ring-indigo-100' : 'shadow-sm border-slate-200 hover:shadow-md hover:border-indigo-100'}`}
    >
      <div 
        className="p-6 cursor-pointer flex items-start gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`p-3 rounded-xl ${data.color} bg-opacity-10 shrink-0`}>
          <Icon className={`w-6 h-6 ${data.color.replace('bg-', 'text-')}`} />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
              {data.id}. {data.title}
            </h3>
            <button className="text-slate-400 hover:text-indigo-500 transition-colors">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          <p className="text-slate-500 mt-2 text-sm line-clamp-2 leading-relaxed">
            {data.problem}
          </p>
        </div>
      </div>

      <div 
        className={`transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-slate-100 mb-4" />
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
            <div className="flex items-center gap-2 mb-2 text-indigo-600 font-semibold text-sm uppercase tracking-wide">
              <ArrowRight size={16} />
              The Fix
            </div>
            <h4 className="font-bold text-slate-900 mb-2">{data.fixTitle}</h4>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {data.fixDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
