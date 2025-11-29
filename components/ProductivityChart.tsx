import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ChartData } from '../types';

const data: ChartData[] = [
  { name: 'Email Hunt', hoursLost: 2.5, category: 'Communication' },
  { name: 'Status Mtgs', hoursLost: 6.0, category: 'Meetings' }, // Weekly per person
  { name: 'Context Switch', hoursLost: 1.5, category: 'Focus' },
  { name: 'Scope Creep', hoursLost: 3.0, category: 'Planning' },
];

const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];

export const ProductivityChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-2">The Hidden Cost of Inefficiency</h3>
      <p className="text-slate-500 text-sm mb-6">Estimated hours lost per week/day due to common process leaks.</p>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis 
            label={{ value: 'Hours Lost', angle: -90, position: 'insideLeft', fill: '#64748b' }}
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false} 
          />
          <Tooltip 
            cursor={{ fill: '#f1f5f9' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="hoursLost" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
