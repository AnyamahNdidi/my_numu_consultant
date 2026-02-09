'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './style.module.scss';

export default function DesktopHeader() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'About', hasDropdown: true },
    { label: 'Learn', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false },
  ];

  return (
    <header className={styles.desktopHeader}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" className={styles.logoSvg} fill="black">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className={styles.logoText}>simpletiger</span>
          </div>

          {/* Navigation and CTA Button */}
          <div className={styles.navContainer}>
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`${styles.navItem} ${
                    activeDropdown === item.label ? styles.active : ''
                  }`}
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className={styles.chevron} />}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button className={styles.ctaButton}>
              Free Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
