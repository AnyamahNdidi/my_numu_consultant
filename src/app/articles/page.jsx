import { client } from '@/lib/sanity'
import Footer from '@/components/Footer.jsx'
import ArticlesGrid from '@/components/ArticlesGrid.jsx'

async function getArticles() {
  try {
    const query = `*[_type == "article"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      readTime,
      mainImage{
        asset->,
        alt
      }
    }`
    const articles = await client.fetch(query, {}, {
      next: { revalidate: 60 }
    })
    return articles
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section – without motion (or create a separate client component) */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase">
                Articles
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                Insights on product strategy, go-to-market planning, and storytelling 
                to help startups launch fast and grow sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-xl">No articles found.</p>
              </div>
            ) : (
              <ArticlesGrid articles={articles} />
            )}
          </div>
        </section>

        {/* Newsletter CTA – you can also move this to a client component if you want animations */}
        {/* <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#0F0F0F]">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-400 mb-8">
                Get the latest insights on startup strategy delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors"
                />
                <button
                  className="px-8 py-4 bg-[#00FF94] text-black font-bold rounded-lg hover:bg-[#00DD80] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </>
  )
}