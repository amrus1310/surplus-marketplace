// components/ApplicationForm.tsx
'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ShieldAlert, Clock, Send } from 'lucide-react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function ApplicationForm({ listingId }: { listingId: string }) {
  const [formData, setFormData] = useState({
    email: '',
    experience: '',
    growthLevers: '',
    plan: '',
    riskContingency: '',
    timeCommitment: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending Proposal...');
    
    const { error } = await supabase.from('applications').insert([
      { 
        listing_id: listingId, 
        applicant_email: formData.email,
        experience: formData.experience,
        growth_strategy: formData.growthLevers,
        business_plan_summary: formData.plan,
        risk_contingency: formData.riskContingency,
        time_commitment: formData.timeCommitment
      }
    ]);

    if (error) setStatus('Error: ' + error.message);
    else setStatus('Success! Your proposal has been sent.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-2xl font-bold text-slate-900">Management Proposal</h3>
        <p className="text-sm text-slate-500">Provide details to build trust with the owner.</p>
      </div>
      
      {/* Basic Info */}
      <div>
        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Contact Email</label>
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500"
          onChange={(e) => setFormData({...formData, email: e.target.value})} required 
        />
      </div>

      {/* Risk Mitigation - THE TRUST BUILDER */}
      <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
        <label className="flex items-center gap-2 text-xs font-bold uppercase text-red-600 mb-2">
          <ShieldAlert size={14} /> Risk Contingency Plan
        </label>
        <textarea 
          placeholder="If revenue drops below the minimum floor, what is your plan?" 
          className="w-full p-3 bg-white border border-red-100 rounded-xl h-24 text-sm"
          onChange={(e) => setFormData({...formData, riskContingency: e.target.value})}
          required
        />
      </div>

      {/* Time Commitment */}
      <div>
        <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2">
          <Clock size={14} /> Weekly Time Commitment
        </label>
        <input 
          type="text" 
          placeholder="e.g. 15 hours/week. Do you have other contracts?" 
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          onChange={(e) => setFormData({...formData, timeCommitment: e.target.value})}
          required
        />
      </div>

      {/* Growth Strategy */}
      <div>
        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Primary Growth Lever</label>
        <input 
          type="text" 
          placeholder="What's the #1 thing you'll do to increase profit?" 
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          onChange={(e) => setFormData({...formData, growthLevers: e.target.value})}
        />
      </div>

      {/* 90 Day Plan */}
      <div>
        <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">90-Day Plan Summary</label>
        <textarea 
          placeholder="Describe your execution strategy for the first 3 months..." 
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl h-28 text-sm"
          onChange={(e) => setFormData({...formData, plan: e.target.value})}
        />
      </div>

      <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
        <Send size={18} /> Submit Application
      </button>

      {status && (
        <div className={`p-3 rounded-xl text-center text-sm font-bold ${status.includes('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
          {status}
        </div>
      )}
    </form>
  );
}
