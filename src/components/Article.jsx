import Image from 'next/image';
import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Article() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Sample articles data
    const articles = [
      {
        date: 'April 2, 2026',
        title: 'How to craft your startup\'s value proposition in 3 steps',
        author: 'Tristan Gillen',
        category: 'Growth Marketing',
        image: '/images/Gemini_Generated_Image_z45ij1z45ij1z45i.png', // Replace with actual image path
        authorAvatar: '/images/tristan.jpg' // Replace with actual avatar
      },
      {
        date: 'April 2, 2026',
        title: 'Positioning your startup against established competitors',
        author: 'Tom Dewhurst',
        category: 'Growth Marketing',
        image: '/images/Gemini_Generated_Image_cs49l3cs49l3cs49.png',
        authorAvatar: '/images/tom.jpg'
      },
       {
        date: 'January 26, 2026',
        title: 'What startups get wrong about product-market fit and marketing',
        author: 'Tristan Gillen',
        category: 'Growth Marketing',
        image: '/images/Gemini_Generated_Image_jez1txjez1txjez1.png',
        authorAvatar: '/images/tristan.jpg'
      },
      {
        date: 'February 2, 2026',
        title: 'Signs your startup needs a GTM strategy (Not just more marketing tactics)',
        author: 'Tom Dewhurst',
        category: 'Growth Marketing',
        image: '/images/Gemini_Generated_Image_al7j99al7j99al7j.png',
        authorAvatar: '/images/tom.jpg'
      },
     
    ];

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
              <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
              {/* Dark overlay */}
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
            {/* Header */}
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
              {/* <Link href="/articles">
                <button className='bg-[#00FF94] text-black px-6 py-3 rounded-full font-medium hover:bg-[#00DD80] transition-colors'>
                  View all articles
                </button>
              </Link> */}
            </motion.div>

            {/* Articles Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
              {articles.map((article, index) => (
                <Link 
                  key={index}
                  href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
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
                    {/* Article Image */}
                    <div className='relative h-64 bg-[#1a1d3a] flex items-center justify-center overflow-hidden'>
                      {/* Placeholder for article image - replace with actual Image component */}
                      <motion.div 
                        className='w-full h-full bg-gradient-to-br from-[#1a1d3a] to-[#2d3256]'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                         <Image src={article.image} alt={article.title} fill className='object-cover' />
                      </motion.div>
                     
                      
                      {/* Overlay that appears on hover */}
                      <div className='absolute inset-0 bg-[#00FF94]/0 group-hover:bg-[#00FF94]/10 transition-all duration-300'></div>
                    </div>

                    {/* Article Content */}
                    <div className='p-6 flex flex-col flex-grow'>
                      <p className='text-sm text-gray-500 mb-3 group-hover:text-[#00FF94] transition-colors duration-300'>
                        {article.date}
                      </p>
                      <h3 className='text-lg font-black text-black mb-6 leading-tight uppercase group-hover:text-[#00FF94] transition-colors duration-300 flex-grow'>
                        {article.title}
                      </h3>

                      {/* Author Info */}
                      {/* <div className='flex items-center gap-3 mt-auto'>
                        <motion.div 
                          className='w-10 h-10 rounded-full bg-[#00FF94] flex items-center justify-center'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className='text-black font-bold text-sm'>
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </motion.div>
                        <div className='flex-1'>
                          <p className='text-sm font-medium text-black'>{article.author}</p>
                        </div>
                        <div className='bg-gray-100 px-3 py-1 rounded-full group-hover:bg-[#00FF94] transition-colors duration-300'>
                          <p className='text-xs font-medium text-black'>{article.category}</p>
                        </div>
                      </div> */}
                    </div>

                    {/* Shadow effect on hover */}
                    <div className='absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl'></div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
    )
}