'use client';
import { useState, useEffect } from 'react';
import DesktopHeader from '../DesktopHeader';
import MobileMenu from '../MobileMenu';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileMenu /> : <DesktopHeader />}
    </>
  );
}
