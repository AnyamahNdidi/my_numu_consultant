"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";

import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import StickyCursor from "@/components/stickyCursor";
import Article from "@/components/Article";
import Info from "@/components/Info/Info";
export default function Home() {
  const stickyElement = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); 

  return (
    <div>
      <Intro />
      <Description />
      {/* <Projects /> */}
      {/* <Section /> */}
      <Info />
      <Article />
      {/* <div className="h-screen" ref={stickyElement}></div> */}
      <Footer />
      {/* <StickyCursor stickyElement={stickyElement}/> */}
    </div>
  );
}
