"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import StickyCursor from "@/components/stickyCursor";
import Article from "@/components/Article";
import Info from "@/components/Info/Info";
import { client } from '@/lib/sanity';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const stickyElement = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Fetch articles
    const fetchArticles = async () => {
      try {
        const query = `*[_type == "article"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          mainImage {
            asset->,
            alt
          }
        }`;
        const data = await client.fetch(query);
        setArticles(data);
        console.log("articles:", articles)
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();

    return () => {
      // Cleanup Lenis
      lenis.destroy();
    };
  }, [articles]);

  if (isLoading) {
    return <div>Loading....</div>; // Or a loading spinner
  }

  return (
    <main>
      <Intro />
      <Description />
      <Info />
      <Article articles={articles} />
      <Footer />
    </main>
  );
}