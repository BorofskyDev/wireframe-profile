'use client'

import { motion } from 'framer-motion'
import styles from './Contact.module.scss'

const variants = {
  initial: {
    color: 'var(--primary-color)',
    backgroundColor: 'var(--background-color)',
    transition: { duration: 0.3 },
  },
  hover: {
    color: 'var(--background-color)',
    backgroundColor: 'var(--highlight-color)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  active: {
    color: 'var(--background-color)',
    backgroundColor: 'var(--active-color)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

export default function ContactButton() {
  return (
    <motion.a
      href='#'
      className={styles.contactButton}
      variants={variants}
      initial='intitial'
      whileHover='hover'
      whileFocus='hover'
      whileTap='active'
    >
      Contact
    </motion.a>
  )
}
