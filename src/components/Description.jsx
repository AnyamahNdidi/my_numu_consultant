import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, FileText } from 'lucide-react';

export default function Description() {
  const services = [
    {
      title: "Product & Narrative Strategy",
      description: "We blend product positioning with compelling driven storytelling to clarify value, shape market perception, and inspire action. From feature framing to founder voice, we turn technical depth into narratives that win customers and partners.",
      icon: Target
    },
    {
      title: "Go-to-Market Strategy",
      description: "Tailored go-to-market plans that drive traction. We translate technical value into buyer-ready messaging, define launch priorities, and equip your team with strategies to win early adopters.",
      icon: Rocket
    },
    {
      title: "Business Development",
      description: "We help companies scale by identifying strategic partners, opening market channels, and shaping growth plays, blending relationship-building with insights to accelerate adoption and revenue.",
      icon: FileText
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hand-drawn squiggle
  const Squiggle = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8C4 4 6 12 8 8C10 4 12 12 14 8C16 4 18 12 20 8C22 4 22 8 22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  // Hand-drawn underline for title
  const TitleUnderline = () => (
    <svg className="absolute -bottom-1 left-0 w-16" height="8" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4C15 6 25 2 35 4C45 6 55 3 58 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  // Hand-drawn scribble decoration
  const ScribbleLines = () => (
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L45 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 12L42 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 19L38 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 26L32 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const ServiceCard = ({ service, index }) => (
    <motion.div
      variants={cardVariants}
      className='relative p-4 md:p-8 flex flex-col  font-sans h-auto min-h-[530px] bg-white overflow-hidden group'
    >
      {/* Green accent at bottom - slides up on hover */}
      <div 
        className='absolute bottom-0 left-0 w-full h-0 group-hover:h-48 bg-[#00FF94] transition-all duration-500 ease-out'
        style={{ 
          borderTopLeftRadius: '50% 20%',
          borderTopRightRadius: '50% 20%',
          zIndex: 0
        }}
      ></div>

      {/* Service icon */}
      <div className='relative z-10 mb-6'>
        <div className='w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center'>
          <service.icon className='w-6 h-6 text-black' strokeWidth={2} />
        </div>
      </div>
      {/* Decorative squiggle top right */}
      <div className='absolute top-6 right-6 text-gray-400 group-hover:text-white/60 transition-colors duration-300 z-10'>
        <Squiggle />
      </div>

      {/* Title with underline */}
      <div className='relative inline-block mb-4 z-10'>
        <h3 className='text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300'>
          {service.title}
        </h3>
        <div className='text-gray-300 group-hover:text-white/60 transition-colors duration-300'>
          <TitleUnderline />
        </div>
      </div>

      {/* Description with better spacing */}
      <div className='relative z-10 flex-1 flex flex-col'>
        <p className='text-gray-600 group-hover:text-black/80 transition-colors duration-300 leading-relaxed'>
          {service.description}
        </p>
      </div>

      {/* Learn More Button - positioned at bottom right */}
      {/* <div className='mt-8 z-10 flex justify-start'>
        <motion.button
          className='bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(150,150,150,0.6)]'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div> */}
    </motion.div>
  );

  return (
    <div className='py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0]'>
      {/* Section Header */}
      <motion.div 
        className='text-center mb-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          Strategic Advisory <br />Services
        </h2> */}
        {/* Orange underline decoration */}
        <svg className='mx-auto mb-6' width="150" height="12" viewBox="0 0 150 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6C30 2 50 10 75 6C100 2 120 10 145 6" stroke="#00FF94" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 9C30 5 50 13 75 9C100 5 120 13 145 9" stroke="#00FF94" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {/* <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          
Excellence in every detail, crafted for your success. Enterprise Growth Strategies.
        </p> */}
      </motion.div>

      {/* Services Grid - 3 cards with gap */}
      <motion.section 
        id="services"
        className="relative py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.section>
    </div>
  );
}