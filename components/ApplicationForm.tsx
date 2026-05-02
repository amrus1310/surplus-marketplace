// components/ApplicationForm.tsx
'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function ApplicationForm({ listingId }: { listingId: string }) {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('applications').insert([
      { listing_id: listingId, applicant_email: email, business_plan_summary: plan }
    ]);

    if (error) setStatus('Error: ' + error.message);
    else setStatus('Success! Owner notified.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold">Apply to Manage</h3>
      <input 
        type="email" placeholder="Your Email" 
        className="w-full p-3 border rounded-xl"
        onChange={(e) => setEmail(e.target.value)} required 
      />
      <textarea 
        placeholder="Brief 90-day plan summary..." 
        className="w-full p-3 border rounded-xl h-32"
        onChange={(e) => setPlan(e.target.value)}
      />
      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
        Submit Application
      </button>
      {status && <p className="text-sm font-medium text-blue-600">{status}</p>}
    </form>
  );
}
