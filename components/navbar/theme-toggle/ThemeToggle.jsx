'use client'

import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className={styles.themeToggle}>
      <div
        className={`${styles.lightToggle} ${
          theme === 'light' ? styles.active : ''
        }  `}
        onClick={handleToggleTheme}
      >
        <SunIcon className={styles.icon} />
        <span>Light</span>
      </div>
      <div
        className={`${styles.darkToggle} ${
          theme === 'dark' ? styles.active : ''
        }`}
        onClick={handleToggleTheme}
      >
        <MoonIcon className={styles.icon} />
        <span>Dark</span>
      </div>
    </div>
  )
}
