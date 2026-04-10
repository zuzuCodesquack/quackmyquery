import React from 'react';
import Link from 'next/link';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = typeof params.q === 'string' ? params.q : '';
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800 font-sans p-6">
      <div className="max-w-3xl w-full px-6 text-center">
        <div className="text-4xl mb-6 select-none cursor-default">🦆</div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
          Searching for: <span className="text-blue-600">&quot;{query}&quot;</span>...
        </h1>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Our data pipelines are currently compiling the best results for this query. Check back soon!
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </Link>
          <p className="text-xs text-slate-400 tracking-widest font-bold uppercase mt-8">
            QUACK MY QUERY • BETA ACCESS COMING SOON
          </p>
        </div>
      </div>
    </main>
  );
}
