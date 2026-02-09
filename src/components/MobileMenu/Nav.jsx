'use client';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

const navItems = [
  { name: 'Home', href: '#', id: 0 },
  { name: 'Solutions', href: '#', id: 1 },
  { name: 'About', href: '#', id: 2 },
  { name: 'Learn', href: '#', id: 3 },
  { name: 'Pricing', href: '#', id: 4 },
  { name: 'Contact', href: '#', id: 5 },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Nav() {
  return (
    <motion.div 
      className={styles.nav}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className={styles.navHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" className={styles.logoSvg} fill="white">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className={styles.logoText}>simpletiger</span>
        </div>
      </div>
      
      <div className={styles.navItems}>
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            className={styles.navItem}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
        
        <motion.button
          className={styles.ctaButton}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Free Demo
        </motion.button>
      </div>
    </motion.div>
  );
}
