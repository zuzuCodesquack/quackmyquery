import pageData from '@/data/templates.json';

// 1. Tell Next.js to build these 50 pages at compile time (Super fast SEO)
export async function generateStaticParams() {
  return pageData.map((page) => ({
    tool: page.toolSlug,
    profession: page.professionSlug,
  }));
}

// 2. Build the actual visual page
export default function TemplatePage({ params }: { params: { tool: string, profession: string } }) {
  // Find the right data block for the current URL
  const data = pageData.find(
    (p) => p.toolSlug === params.tool && p.professionSlug === params.profession
  );

  if (!data) return <div>Template not found</div>;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold">
        How to use {data.toolName} for {data.professionName}
      </h1>
      <p className="text-gray-600 mt-4">{data.coreProblem}</p>
      
      {/* The Value Box */}
      <div className="bg-gray-900 text-green-400 p-6 mt-8 rounded-lg">
        <h3 className="text-white font-bold mb-2">{data.utilityName}</h3>
        <code className="block mt-4">{data.copyPasteElement}</code>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded">
          Copy Formula
        </button>
      </div>

      {/* The Affiliate Hook */}
      <a href={data.affiliateLink} className="mt-8 block text-blue-500 underline">
        Get {data.toolName} Here
      </a>
    </main>
  );
}