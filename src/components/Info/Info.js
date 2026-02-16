'use client'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';

export default function Info() {

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;
  
const setPath = (progress) => {
    if (!path.current) return;
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  useEffect(() => {
    setPath(progress);
  }, [progress, setPath])

  
  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while touching
    const touch = e.touches[0];
    const pathBound = path.current.getBoundingClientRect();
    x = (touch.clientX - pathBound.left) / pathBound.width;
    
    // Calculate movement based on touch position
    if (e.touches.length > 0) {
      const currentY = touch.clientY;
      if (window.lastTouchY !== undefined) {
        const movementY = currentY - window.lastTouchY;
        progress += movementY;
      }
      window.lastTouchY = currentY;
      setPath(progress);
    }
  }

  const manageTouchEnd = () => {
    window.lastTouchY = undefined;
    animateOut();
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <div className={styles.line}>
              <div 
                onMouseEnter={() => {manageMouseEnter()}} 
                onMouseMove={(e) => {manageMouseMove(e)}} 
                onMouseLeave={() => {manageMouseLeave()}}
                onTouchStart={() => {manageMouseEnter()}}
                onTouchMove={(e) => {manageTouchMove(e)}}
                onTouchEnd={() => {manageTouchEnd()}}
                className={styles.box}
              ></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>

            <div className={styles.description}>
              <p>Our Expertise</p>
              <p>With deep expertise in marketing, cloud ecosystems, and founder-led storytelling, we help startups launch fast, create visibility, and grow sustainably.</p>
            </div>
            <div className={styles.tagsContainer}>
              <p >Our Services</p>
              <div className={styles.tags}>
                <p className={styles.tag}>Go-to-Market Strategy</p>
                <p className={styles.tag}>Product Marketing</p>
                <p className={styles.tag}>Brand Positioning</p>
                <p className={styles.tag}>Cloud Solutions</p>
                <p className={styles.tag}>Founder Storytelling</p>
                <p className={styles.tag}>Growth Marketing</p>
              </div>
            </div>
        </div>
    </div>
  )
}