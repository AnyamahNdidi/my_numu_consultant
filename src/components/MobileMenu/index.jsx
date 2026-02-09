'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
  open: {
    width: '100vw',
    height: '100vh',
    top: 0,
    right: 0,
    borderRadius: 0,
    transition: { duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '60px',
    height: '60px',
    top: '20px',
    right: '20px',
    borderRadius: '50%',
    transition: {
      duration: 0.5,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function MobileMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
