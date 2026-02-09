'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Check, TrendingUp, Users, Sparkles, ArrowRight, Linkedin } from 'lucide-react';
import Footer from "@/components/Footer";
import Image from "next/image";
import ceoImage from "../../../public/images/ceo.jpg";
import backgroundImg from "../../../public/images/betterImage.jpg"

export default function AboutUs() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <main ref={container} className="relative h-[200vh]">
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </main>
    </>
  );
}

const Section1 = () => {
  return (
    <div className="relative bg-[#0A0A0A] py-2 md:py-16">
      <div className="absolute inset-0 bg-lime-600 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] to-[#0A0A0A]/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <div className="max-w-3xl lg:px-12 ">
          {/* <div className="mb-4">
            <span className="text-[#00FF94] font-medium">Your Search Ends Here.</span>
          </div> */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            We don&apos;t just market startups,{' '}
            <span className="text-[#00FF94] inline"> we make them matter.</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            With deep expertise in marketing, cloud ecosystems, and founder-led storytelling, we help you launch fast, create visibility, and grow sustainably.
          </p>

          <div className="flex">
            <a 
              href="/contact" 
              className="group inline-flex items-center bg-[#00FF94] hover:bg-[#00D17A] text-[#0F3D3E] px-6 py-3 rounded-md font-normal transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Trusted by */}
        {/* <div className="container mx-auto px-8 lg:px-16 pb-16">
          <div className="max-w-4xl">
            <p className="text-gray-400 text-sm mb-8">Trusted and endorsed by</p>

            <div className="flex items-center space-x-8 lg:space-x-12 opacity-70">
              <div className="text-white font-bold text-xl tracking-wide">PayPal</div>

              <div className="text-white">
                <div className="text-sm font-bold tracking-wider">LITHISOZ</div>
                <div className="text-xs text-gray-400">Digital Future of Retail</div>
              </div>

              <div className="text-white font-bold text-lg tracking-wider">NOVAVENTE</div>

              <div className="text-white font-bold text-xl">WiZR</div>

              <div className="flex items-center space-x-2 text-white">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute w-4 h-0.5 bg-black transform rotate-45"></div>
                </div>
                <span className="font-bold">PrimeOrbit</span>
              </div>

              <div className="text-white font-bold text-xl italic">ellow.</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Section2 = () => {

  const edges = [
    {
      icon: Sparkles,
      title: "Proven Expertise",
      description: "9+ years at Google leading product marketing across Google Cloud, YouTube Ads, and Google Ads."
    },
    {
      icon: Users,
      title: "Founder-First Approach",
      description: "We operate as your embedded strategy partner, not a distant consultant."
    },
    {
      icon: TrendingUp,
      title: "Story + Strategy",
      description: "From positioning to launch playbooks, we connect vision with results that move markets."
    }
  ];

  return (
    <div className="relative min-h-80 bg-black py-8 text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Edge<br />
            {/* <span className="text-[#00FF94]">to be efficient for you.</span> */}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-[#00FF94] transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <edge.icon className="w-12 h-12 text-[#00FF94] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">{edge.title}</h3>

              <p className="text-gray-400 leading-relaxed">{edge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-lg">
            Ready to transform your AI startup&apos;s go-to-market strategy?
          </p>
        </div> */}
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="relative bg-[#F4F0E7] text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl text-[#0A0A0A] md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Founder
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
              <Image
                src={ceoImage}
                alt="CEO of Nunu Consulting"
                width={500}
                height={600}
                className="object-cover w-full h-[600px]"
              />
            </div>
          </div>

          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl text-[#0A0A0A] font-bold mb-2">Tjimke</h3>
            <p className="text-[#0A0A0A] font-semibold text-lg mb-6 uppercase tracking-wide">
              Founder &amp; Principal Consultant
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
            A trusted advisor to multiple early-stage founders, Tjimke has helped products at Google and beyond find their market and scale. She started Nunu Consulting to bring that same clarity and momentum to the next generation of startups ensuring they launch fast, resonate deeply, and grow sustainably.
            </p>

            <blockquote className="border-l-4 border-[#00FF94] pl-4 py-2 mb-6 italic text-gray-600">
              Great technology becomes great products when the market understands the value.
            </blockquote>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-[#00FF94] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#0A0A0A] group-hover:bg-[#00FF94] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
