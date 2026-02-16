'use client';

import Image from 'next/image';
import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

// Format date helper function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function Article({ articles = [] }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  if (!articles || articles.length === 0) {
    return null; // or return a loading/empty state
  }

  return (
    <div
      ref={container} 
      id="articles"
      className='relative flex items-center justify-center min-h-screen overflow-hidden py-20'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      {/* Parallax Background */}
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full z-0'>
        <motion.div style={{y}} className='relative w-full h-full'>
          <Image 
            src={Background} 
            fill 
            alt="Background" 
            priority
            className="object-cover"
          />
          <div className='absolute inset-0 bg-black/50'></div>
          {/* Decorative leaf shapes */}
          <svg className='absolute top-20 left-10 w-32 h-32 text-green-500/30' viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C20 30, 10 60, 50 90 C90 60, 80 30, 50 10" />
          </svg>
          <svg className='absolute bottom-20 right-10 w-40 h-40 text-green-500/30' viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C20 30, 10 60, 50 90 C90 60, 80 30, 50 10" />
          </svg>
          <svg className='absolute top-40 right-20 w-24 h-24 text-green-500/20 rotate-45' viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C20 30, 10 60, 50 90 C90 60, 80 30, 50 10" />
          </svg>
          <svg className='absolute bottom-40 left-20 w-28 h-28 text-green-500/20 -rotate-12' viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C20 30, 10 60, 50 90 C90 60, 80 30, 50 10" />
          </svg>
        </motion.div>
      </div>

      {/* Articles Section */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-6'>
        <motion.div 
          className='flex justify-between items-center mb-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase'>
            Articles
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {articles.map((article, index) => (
            <Link 
              key={article._id}
              href={`/articles/${article.slug?.current || 'article'}`}
              className='block h-full'
            >
              <motion.div
                className='bg-white rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className='relative h-64 bg-[#1a1d3a] flex items-center justify-center overflow-hidden'>
                  {article.mainImage ? (
                    <motion.div 
                      className='w-full h-full'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={urlFor(article.mainImage).width(600).height(400).url()}
                        alt={article.mainImage.alt || article.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-[#00FF94]/0 group-hover:bg-[#00FF94]/10 transition-all duration-300'></div>
                </div>

                <div className='p-6 flex flex-col flex-grow'>
                  <p className='text-sm text-gray-500 mb-3 group-hover:text-[#00FF94] transition-colors duration-300'>
                    {formatDate(article.publishedAt || article._createdAt)}
                  </p>
                  <h3 className='text-lg font-black text-black mb-6 leading-tight uppercase group-hover:text-[#00FF94] transition-colors duration-300 flex-grow'>
                    {article.title}
                  </h3>
                </div>

                <div className='absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl'></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}