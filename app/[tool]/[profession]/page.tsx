import pageData from '@/data/templates.json';
import CopyButton from '@/app/components/CopyButton';
import Link from 'next/link';

export async function generateStaticParams() {
  return pageData.map((page) => ({
    tool: page.toolSlug,
    profession: page.professionSlug,
  }));
}

type Props = {
  params: Promise<{ tool: string; profession: string }>;
};

export const dynamicParams = false;

// Sub-Component securely mapping the new generated Value Proposition block!
function ValueProposition({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs || paragraphs.length !== 2) return null;
  return (
    <section className="mt-16 bg-blue-50/50 p-8 sm:p-10 rounded-3xl border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
        <span>💡</span> Why This Actually Matters
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed font-medium">
          {paragraphs[0]}
        </p>
        <p className="text-lg text-slate-700 leading-relaxed font-medium">
          {paragraphs[1]}
        </p>
      </div>
    </section>
  );
}

export default async function TemplatePage({ params }: Props) {
  const { tool, profession } = await params;

  const data = pageData.find(
    (p) => p.toolSlug === tool && p.professionSlug === profession
  );

  if (!data) return <div className="text-center py-20 text-xl font-medium text-slate-700">Template not found</div>;

  const relatedBlueprints = pageData
    .filter((p) => p.toolSlug === data.toolSlug && p.professionSlug !== data.professionSlug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <main className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
        <div className="mb-8">
          <Link href="/blueprints" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center">
            &larr; Back to Directory
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          How to use <span className="text-blue-600">{data.toolName}</span> for <span className="text-slate-700">{data.professionName}</span>
        </h1>
        <p className="text-slate-600 mt-6 text-xl leading-relaxed">{data.coreProblem}</p>

        {/* Business Value Section dynamically implemented! */}
        <ValueProposition paragraphs={data.businessValue} />

        {/* Blueprint Steps */}
        <section className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Blueprint</h2>
          <ul className="space-y-5 text-lg">
            {data.blueprintSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="text-slate-800 font-medium leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Value Box */}
        <div className="bg-slate-900 p-8 mt-12 rounded-2xl shadow-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
             <h3 className="text-white font-black text-2xl tracking-wide">{data.utilityName}</h3>
             <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Ready to Use</span>
          </div>
          <p className="text-slate-400 text-sm mb-6 font-medium">Copy the exact formula below and paste it into {data.toolName}:</p>
          <code className="block p-5 bg-slate-950 text-green-400 rounded-xl font-mono text-sm leading-relaxed shadow-inner break-words border border-slate-800/50">
            {data.copyPasteElement}
          </code>
          <div className="mt-6 flex justify-end">
            <CopyButton textToCopy={data.copyPasteElement} />
          </div>
        </div>

        {/* Actionable Toolkit: Setup Guide */}
        {data.implementation_guide && data.implementation_guide.length > 0 && (
          <section className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-blue-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
              <span>🛠️</span> Actionable Toolkit: Setup Guide
            </h2>
            <p className="text-slate-500 mb-6 font-medium">Follow these exact steps to implement this blueprint in {data.toolName}:</p>
            <div className="space-y-4">
              {data.implementation_guide.map((step, index) => {
                const cleanStep = step.replace(/^\d+\.\s*/, '');
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed pt-1">
                      {cleanStep}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Affiliate Link & Legal Footer */}
        <footer className="mt-20 pt-10 border-t border-slate-200">
          <div className="text-center mb-16">
            <p className="text-xl font-bold text-slate-800 mb-6">
              Ready to start building?
            </p>
            <a
              href={data.affiliateLink}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get your {data.toolName}{" "}account &rarr;
            </a>
          </div>

          {/* Internal Linking SEO Block */}
          {relatedBlueprints.length > 0 && (
            <div className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                Explore More {data.toolName} Blueprints
              </h4>
              <ul className="space-y-3">
                {relatedBlueprints.map((template, idx) => (
                  <li key={idx}>
                     <Link href={`/${template.toolSlug}/${template.professionSlug}`} className="text-blue-600 hover:underline font-medium">
                       &rarr; {template.toolName} for {template.professionName}
                     </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="max-w-2xl mx-auto text-xs text-slate-500 space-y-4 text-center bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p>
              <strong className="text-slate-700">Affiliate Disclosure:</strong> Some of the links on this page may be affiliate links. If you click them and make a purchase, we may earn a small commission at no extra cost to you. This keeps our blueprint library free.
            </p>
            <p>
              <strong className="text-slate-700">Compliance Disclaimer:</strong> These blueprints are educational templates. You are solely responsible for ensuring your automated emails, SMS messages, and data handling comply with local laws (such as TCPA, A2P 10DLC, GDPR, and CAN-SPAM). Always test automations before pushing them live to clients.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
