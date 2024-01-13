'use client'

import { motion } from 'framer-motion'
import styles from './HamburgerToggle.module.scss'

const topVariants = {
  closed: { rotate: 0, top: '0.25em' },
  opened: { rotate: 45, top: '0.9em' },
}

const middleVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 0, left: '1em' },
}

const bottomVariants = {
  closed: { rotate: 0, top: '1.55em' },
  opened: { rotate: -45, top: '0.9em' },
}

export default function HamburgerToggle({ isMenuOpen, handleMenuToggle }) {
  return (
    <button
      className={styles.hamburgerToggle}
      onClick={handleMenuToggle}
      aria-label='Navigation Menu Toggle'
      tabIndex={1}
    >
      <motion.span
        variants={topVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
      <motion.span
        variants={middleVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
      <motion.span
        variants={bottomVariants}
        animate={isMenuOpen ? 'opened' : 'closed'}
      ></motion.span>
    </button>
  )
}
