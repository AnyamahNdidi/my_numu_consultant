import { client } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import BackButton from '@/components/BackButton';
import ArticleHeader from '@/components/ArticleHeader';
import FeaturedImage from '@/components/FeaturedImage';
import Link from 'next/link';

// Add these functions back
async function getArticle(slug) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    readTime,
    mainImage{
      asset->,
      alt
    },
    body,
    author,
    category
  }`;
  return await client.fetch(query, { slug });
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "article" && defined(slug.current)]{"slug": slug.current}`
  );
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function ArticleDetailPage({ params }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <ArticleHeader title={article.title} readTime={article.readTime} />
        </div>
      </div>

      <FeaturedImage image={article.mainImage} alt={article.title} />

      <article className="px-6 md:px-12 lg:px-16 pb-20">
        <ArticleContent body={article.body} />
      </article>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to clarify your startup&apos;s message?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let&apos;s work together to craft positioning and messaging that resonates with your market.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#00FF94] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00DD80] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}