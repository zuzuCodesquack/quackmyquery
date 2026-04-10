import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import templatesData from '@/data/templates.json'; 

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = (typeof params.q === 'string' ? params.q : '').toLowerCase().trim();

  // 1. SCAN FOR MATCHES
  const match = templatesData.find(t => 
    t.toolName.toLowerCase().includes(query) || 
    t.professionName.toLowerCase().includes(query) ||
    t.coreProblem.toLowerCase().includes(query)
  );

  // 2. SMART REDIRECT
  // Transformed logic to match actual schema values (toolSlug/professionSlug)
  if (match && query.length > 2) {
    redirect(`/${match.toolSlug}/${match.professionSlug}`);
  }

  // 3. FALLBACK (If no match found)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800 font-sans p-6">
      <div className="max-w-3xl w-full px-6 text-center">
        <div className="text-4xl mb-6 select-none">🦆</div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
          Searching for: <span className="text-blue-600">&quot;{query}&quot;</span>
        </h1>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 mb-10">
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
            We don&apos;t have a specific blueprint for that yet, but our duck is on the case!
          </p>
          <Link href="/blueprints" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            Browse All 9 Blueprints
          </Link>
        </div>
        <Link href="/" className="text-slate-400 hover:text-blue-600 font-medium group inline-flex items-center">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Home
        </Link>
      </div>
    </main>
  );
}
