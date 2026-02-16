'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

export default function FeaturedImage({ image, alt }) {
  if (!image) return null;

  return (
    <section className="px-6 md:px-12 lg:px-16 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={urlFor(image).width(1200).height(600).url()}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}