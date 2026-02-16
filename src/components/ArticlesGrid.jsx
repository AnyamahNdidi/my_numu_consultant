'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

// Define formatDate inside the client component
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticlesGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.div
          key={article._id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link 
            href={`/articles/${article.slug.current}`}
            className="block h-full group"
          >
            <motion.article
              className="bg-[#0F0F0F] rounded-2xl overflow-hidden h-full flex flex-col border border-gray-800 hover:border-[#00FF94] transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                {article.mainImage ? (
                  <Image 
                    src={urlFor(article.mainImage).width(600).height(400).url()}
                    alt={article.mainImage.alt || article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                  <time>{formatDate(article.publishedAt)}</time>
                  {article.readTime && (
                    <>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#00FF94] transition-colors duration-300">
                  {article.title}
                </h2>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}