'use client';

import { motion } from 'framer-motion';

export default function ArticleHeader({ title, readTime }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6 text-sm"
      >
        {readTime && (
          <span className="text-gray-400">{readTime} min read</span>
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
      >
        {title}
      </motion.h1>
    </>
  );
}