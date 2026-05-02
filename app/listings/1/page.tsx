import ApplicationForm from '@/components/ApplicationForm';
import { ArrowLeft, DollarSign, PieChart, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ListingDetail({ params }: { params: { id: string } }) {
  // In Phase 2, this data will come from your Supabase database
  const business = {
    title: "E-commerce Pet Brand",
    description: "A high-growth Shopify store specializing in organic pet treats. The owner is looking for an operator to handle supply chain and digital marketing.",
    minReturn: 3000,
    surplusSplit: 70,
    avgProfit: 8500
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition">
          <ArrowLeft size={20} className="mr-2" /> Back to Marketplace
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{business.title}</h1>
              <p className="text-slate-600 leading-relaxed text-lg">{business.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                <DollarSign className="mx-auto text-blue-600 mb-2" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Floor</p>
                <p className="text-xl font-bold">${business.minReturn}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                <PieChart className="mx-auto text-green-600 mb-2" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Split</p>
                <p className="text-xl font-bold">{business.surplusSplit}%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                <Clock className="mx-auto text-orange-600 mb-2" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Time</p>
                <p className="text-xl font-bold">15h/wk</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <ApplicationForm listingId={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
