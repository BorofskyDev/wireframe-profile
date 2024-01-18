'use client'
import { motion } from 'framer-motion'
import styles from './Heading3.module.scss'

export default function Heading3({children}) {
    return (
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={styles.heading3}
      >
        {children}
      </motion.h3>
    )
}