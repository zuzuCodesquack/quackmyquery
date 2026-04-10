import Link from 'next/link';
import pageData from '@/data/templates.json';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlueprintsDirectory({ searchParams }: Props) {
  const params = await searchParams;
  const toolQuery = typeof params.tool === 'string' ? params.tool.toLowerCase() : null;

  // Filter Data natively mapping to either toolSlug or toolName dynamically
  const filteredData = toolQuery 
    ? pageData.filter(template => 
        template.toolSlug.toLowerCase().includes(toolQuery) || 
        template.toolName.toLowerCase().includes(toolQuery)
      ) 
    : pageData;

  // Properly format standard display names for the feedback banner
  const toolDisplayName = toolQuery 
    ? toolQuery.charAt(0).toUpperCase() + toolQuery.slice(1).replace('-com', '.com')
    : 'All';

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Return */}
        <div className="mb-6">
          <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium transition-colors inline-block">
            &larr; Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-16 text-center shadow-sm py-12 px-6 rounded-3xl bg-white border border-slate-200">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl mb-6">
            Dynamic Directory
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            Discover automated blueprints to streamline your work and solve core problems instantly.
          </p>

          {/* Conditional UI Feedback Filter Banner */}
          {toolQuery && (
            <div className="inline-flex items-center gap-4 bg-slate-100 px-6 py-3 rounded-full border border-slate-200 shadow-inner">
              <span className="font-bold text-slate-700">Showing {toolDisplayName} Blueprints</span>
              <span className="text-slate-300">|</span>
              <Link href="/blueprints" className="text-red-500 hover:text-red-600 font-semibold text-sm transition-colors uppercase tracking-wider">
                ✕ Clear Filter
              </Link>
            </div>
          )}
        </header>

        {/* Grid Section */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((template: any, index: number) => (
              <Link
                key={index}
                href={`/${template.toolSlug}/${template.professionSlug}`}
                className="group flex flex-col bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-1"
              >
                <div className="bg-slate-900 p-6 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-black tracking-widest uppercase text-xs">
                      {template.toolName}
                    </span>
                    <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-medium">
                      {template.professionName}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {template.utilityName}
                    </h2>
                  </div>
                  <div className="mt-8 flex items-center text-sm font-bold text-blue-600">
                    View Blueprint <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🦆</div>
            <h3 className="text-2xl font-bold text-slate-800">No tools found</h3>
            <p className="text-slate-500 mt-2">Try clearing your filters to see all available blueprints.</p>
          </div>
        )}

      </div>
    </main>
  );
}
