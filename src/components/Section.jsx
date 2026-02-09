import Image from 'next/image';
import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Sample avatars
    const avatars = [
      { bg: '#4A5568', initials: 'JD' },
      { bg: '#2D3748', initials: 'MK' },
      { bg: '#1A202C', initials: 'AS' },
      { bg: '#553C9A', initials: 'RB' },
      { bg: '#2C5282', initials: 'TW' },
      { bg: '#276749', initials: 'KL' },
      { bg: '#9C4221', initials: 'NP' },
      { bg: '#702459', initials: 'EH' },
      { bg: '#234E52', initials: 'CF' },
    ];

    return (
        <div
          ref={container} 
          id="services"
          className='relative flex items-center justify-center h-screen overflow-hidden'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
          {/* Parallax Background - MUST BE FIRST */}
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

          {/* Center Content - Green Card - MUST HAVE z-10 */}
          <motion.div 
            className='relative z-10 bg-[#00FF94] rounded-3xl px-16 py-8 text-center max-w-xl w-full min-h-[430px] mx-6 flex flex-col items-center justify-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className='text-3xl md:text-4xl font-bold text-black mb-3'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to get started?
            </motion.h2>

            <motion.p 
              className='text-black/80 mb-2 text-lg'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Book a consultation with us to take your startup from launch to traction.
            </motion.p>

            <motion.div 
              className='flex items-center justify-center mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='bg-white/90 rounded-full px-4 py-4 flex items-center gap-2 shadow-lg'>
                <div className='flex items-center gap-1 pr-2 border-r border-gray-300'>
                  <span className='font-bold text-black'>5</span>
                  <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                </div>
                <div className='flex -space-x-2'>
                  {avatars.map((avatar, i) => (
                    <div 
                      key={i}
                      className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium'
                      style={{ backgroundColor: avatar.bg }}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                  <div className='w-8 h-8 rounded-full border-2 border-white bg-[#00FF94] flex items-center justify-center text-black text-xs font-bold'>
                    +
                  </div>
                </div>
              </div>
            </motion.div>

            <Link href="/contact">
              <motion.button 
                className='bg-black text-white px-8 py-3 rounded-full font-normal text-lg hover:bg-gray-800 transition-colors mb-3'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Consultation
              </motion.button>
            </Link>

            {/* <motion.p 
              className='text-black/70 text-sm'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Or learn more about our <a href="#" className='text-black underline font-medium hover:no-underline'>consulting</a>.
            </motion.p> */}
          </motion.div>
        </div>
    )
}