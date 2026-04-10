import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800 font-sans p-6 overflow-hidden">
      <div className="max-w-4xl w-full px-6 text-center">
        <div className="text-8xl mb-6 select-none animate-bounce-slow">🦆</div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">Quack My Query</h1>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Your friendly assistant for data and automation. Browse our premium library of ready-to-use blueprints to hyper-charge your business systems instantly.
        </p>
        
        <h2 className="text-sm font-black text-slate-400 mb-6 uppercase tracking-[0.2em]">Browse By Tool</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
           <Link href="/blueprints" className="bg-white hover:bg-orange-50/50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-orange-200 p-8 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 group">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-sm">⚡</span>
              <span className="font-bold text-slate-700 tracking-tight">Zapier</span>
           </Link>
           <Link href="/blueprints" className="bg-white hover:bg-purple-50/50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-purple-200 p-8 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 group">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-sm">⚙️</span>
              <span className="font-bold text-slate-700 tracking-tight">Make.com</span>
           </Link>
           <Link href="/blueprints" className="bg-white hover:bg-pink-50/50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-pink-200 p-8 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 group">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-sm">🔺</span>
              <span className="font-bold text-slate-700 tracking-tight">ClickUp</span>
           </Link>
           <Link href="/blueprints" className="bg-white hover:bg-blue-50/50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 p-8 rounded-3xl flex flex-col items-center gap-4 transition-all duration-300 group">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-sm">📊</span>
              <span className="font-bold text-slate-700 tracking-tight">Airtable</span>
           </Link>
        </div>

        <Link href="/blueprints" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-blue-600 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 tracking-wide">
          View Complete Directory &rarr;
        </Link>
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
