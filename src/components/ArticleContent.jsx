'use client';

import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

// Move ptComponents inside the client component
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={urlFor(value).width(800).height(500).url()}
            alt={value.alt || ' '}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mt-16 mb-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-white mt-12 mb-6">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-6">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
        {children}
      </ul>
    ),
  },
};

export default function ArticleContent({ body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-3xl mx-auto prose prose-invert prose-lg"
    >
      <PortableText value={body} components={ptComponents} />
    </motion.div>
  );
}