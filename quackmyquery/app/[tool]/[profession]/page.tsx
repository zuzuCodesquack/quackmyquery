"use client";

import React, { use } from 'react';
import pageData from '../../../../data/templates.json';
import { notFound } from 'next/navigation';

export default function TemplatePage({ params }: { params: Promise<{ tool: string, profession: string }> }) {
  const resolvedParams = use(params);

  const data = (pageData as any).find(
    (p: any) => p.toolSlug === resolvedParams.tool && p.professionSlug === resolvedParams.profession
  );

  if (!data) {
    notFound();
  }

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(data.copyPasteElement);
      alert("Blueprint copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs border-b-2 border-blue-600 pb-1">
            {data.toolName} Automation
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {data.toolName} for {data.professionName}
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            {data.coreProblem}
          </p>
        </header>

        {/* The Blueprint Card */}
        <section className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 sm:p-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">
                <span className="text-blue-400 mr-2">⚡</span> 
                {data.utilityName}
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-5 mb-10">
              {data.blueprintSteps?.map((step: string, index: number) => (
                <div key={index} className="flex items-start text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800 text-xs font-bold mr-4 border border-slate-700">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* The Code/Formula Block */}
            <div className="bg-black rounded-xl p-6 border border-slate-800 mb-8 font-mono">
              <code className="block text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
                {data.copyPasteElement}
              </code>
            </div>

            {/* The Action Button */}
            <button
              onClick={handleCopy}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
            >
              Copy Blueprint to Clipboard
            </button>
          </div>
        </section>

        {/* Affiliate Link Footer */}
        <footer className="mt-16 pt-8 text-center border-t border-slate-200">
          <p className="text-slate-400 text-sm">
            Ready to build this?{" "}
            <a 
              href={data.affiliateLink} 
              className="text-blue-600 font-bold hover:underline"
              target="_blank" 
            >
              Get your {data.toolName}{" "}account here &rarr;
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}