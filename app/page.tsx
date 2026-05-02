import { Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <Briefcase size={24} />
          </div>
          <span className="font-bold text-xl text-slate-900">Operator Equity</span>
        </div>
        <div className="flex gap-4">
          <Link href="/list-business" className="text-slate-600 font-bold hover:text-blue-600 transition pt-2">
            List a Business
          </Link>
          <button className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold hover:bg-blue-600 transition shadow-lg">
            Find an Asset
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Own the asset. <span className="text-blue-600">Outsource the grind.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          The first marketplace where owners "lease" their daily operations to expert managers. 
          Owners get guaranteed returns; Operators keep the surplus.
        </p>
      </section>

      {/* Marketplace Grid (Sample Card) */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition">
             <div className="flex justify-between items-start mb-6">
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">SaaS</span>
                <TrendingUp className="text-slate-400" size={20} />
             </div>
             <h3 className="text-xl font-bold mb-4">E-commerce Pet Brand</h3>
             <div className="space-y-4 mb-8">
                <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="text-slate-500">Min. Return</span>
                    <span className="font-bold text-blue-600">$3,000/mo</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="text-slate-500">Your Split</span>
                    <span className="font-bold">70% Surplus</span>
                </div>
             </div>
             <Link href="/listings/1" className="block w-full py-4 bg-slate-900 text-center text-white rounded-2xl font-bold hover:bg-blue-600 transition">
                Apply to Manage
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
