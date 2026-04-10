'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800 font-sans p-6">
      <div className="max-w-3xl w-full px-6 text-center">
        <div className="text-8xl mb-6 select-none animate-bounce-slow">🦆</div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Quack My Query</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Your friendly assistant for finding the exact prices, specs, and local data you need.
        </p>
        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-200 overflow-hidden max-w-2xl mx-auto mb-8 border border-gray-200 group">
          <div className="pl-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for anything..." className="flex-grow pl-3 pr-4 py-4 focus:outline-none text-lg text-slate-700 placeholder-gray-400 min-w-0" autoFocus />
          <button type="submit" className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 whitespace-nowrap">Search</button>
        </form>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500 mb-8">
          <button onClick={() => setQuery('Local pricing')} className="hover:text-blue-600 transition">Local pricing</button>
          <button onClick={() => setQuery('Product specs')} className="hover:text-blue-600 transition">Product specs</button>
          <button onClick={() => setQuery('City data')} className="hover:text-blue-600 transition">City data</button>
          <button onClick={() => setQuery('Market trends')} className="hover:text-blue-600 transition">Market trends</button>
        </div>
        <div className="text-xs text-slate-400 mt-8 tracking-widest font-bold uppercase">
          LAUNCHING SOON • YOUR DATA, SIMPLIFIED
        </div>
        <Link href="/blueprints" className="mt-6 inline-block text-slate-400 hover:text-blue-600 underline text-[10px] uppercase tracking-tighter">
          Blueprint Directory
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
