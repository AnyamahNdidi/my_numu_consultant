import React, { useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Smartphone, BarChart3, MousePointer, AtSign, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Intro() {
    const container = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    // determine the scroll distance for the container
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"])
  
    // Individual icon scroll animations
    const icon1Y = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"])
    const icon2Y = useTransform(scrollYProgress, [0, 1], ["0vh", "180vh"])
    const icon3Y = useTransform(scrollYProgress, [0, 1], ["0vh", "140vh"])
    const icon4Y = useTransform(scrollYProgress, [0, 1], ["0vh", "160vh"])
    const icon5Y = useTransform(scrollYProgress, [0, 1], ["0vh", "130vh"])
    const icon6Y = useTransform(scrollYProgress, [0, 1], ["0vh", "170vh"])

    // Mouse tracking
    useEffect(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setMousePosition({
          x: (clientX - centerX) / centerX,
          y: (clientY - centerY) / centerY
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Floating animation variants
    const floatingVariants = {
      animate: (i) => ({
        // y: [0, -10, 0, 10, 0],
        x: [0, 5, 0, -5, 0],
        rotate: [0, 3, 0, -3, 0],
        transition: {
          duration: 4 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })
    };

    const icons = [
      { Icon: Mail, scrollY: icon1Y, className: 'absolute top-8 md:top-5 left-4 md:left-20', size: 'w-8 h-8 md:w-12 md:h-12', speed: 15, custom: 0 },
      { Icon: Smartphone, scrollY: icon2Y, className: 'hidden md:block absolute top-20 md:top-32 left-8 md:left-32', size: 'w-6 h-6 md:w-10 md:h-10', speed: 10, custom: 1 },
      { Icon: BarChart3, scrollY: icon3Y, className: 'absolute bottom-32 md:bottom-50 bottom-20 left-6 md:left-24', size: 'w-10 h-10 md:w-14 md:h-14', speed: 10, custom: 2 },
      { Icon: MousePointer, scrollY: icon4Y, className: 'hidden md:block absolute top-16 md:top-24 left-1/4 md:left-72', size: 'w-6 h-6 md:w-10 md:h-10', speed: 18, custom: 3 },
      { Icon: Rocket, scrollY: icon5Y, className: 'absolute top-12 md:top-20 right-8 md:right-32', size: 'w-8 h-8 md:w-12 md:h-12', speed: 11, custom: 4 },
      { Icon: AtSign, scrollY: icon6Y, className: 'hidden md:block absolute top-32 md:top-48 right-6 md:right-20', size: 'w-6 h-6 md:w-10 md:h-10', speed: 14, custom: 5 },
    ];
  
    return (
      <div id="about" ref={container} className='h-[620px]  overflow-hidden bg-[#0A0A0A] '>
        <motion.div style={{y}} className='relative h-full  bg-[#0A0A0A] flex items-center justify-center'>
          {/* Floating Icons with Mouse Tracking - Behind content */}
          <div className='absolute inset-0 z-0'>
            {icons.map(({ Icon, scrollY, className, size, speed, custom }, index) => (
            <motion.div 
              key={index}
              // style={{ y: scrollY }}
              className={className}
            >
              <motion.div
              //   variants={floatingVariants}
              //   animate="animate"
              //   custom={custom}
              //   style={{
              //     x: mousePosition.x * speed,
              //     // y: mousePosition.y * speed * 0.5
              //   }}
              //  transition={{ duration: 0.3 }}
              >
                <Icon className={`${size} text-white`} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          ))}
          </div> 

          {/* Main Content */}
          <div className='text-center font-sans px-6 z-10 relative'>
            <motion.h1 
              className='text-5xl md:text-6xl font-bold  text-white mb-6 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Your <span className='relative'>
                <span className='relative z-10'>Strategy & GTM Partner</span>
                <span className='absolute bottom-2 left-0 w-full h-2 bg-[#00FF94] opacity-30 -z-0'></span>
              </span> <span className='block h-2' />for <span className='relative inline-block'>
                {/* <span className='relative z-10'>AI-First</span> */}
              </span> Startups
            </motion.h1>
            
            <motion.p 
              className='text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              We shape your positioning, craft your story, and build GTM strategies that win customers, fast
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <Link href="/contact" className='inline-block'>
                <button className='bg-[#00FF94] text-black px-6 py-2 rounded-lg text-lg font-medium hover:bg-green-400 transition-colors'>
                  Book A Consultation
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
}