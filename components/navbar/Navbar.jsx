import styles from './Navbar.module.scss'
import ContactButton from './contact/Contact'
import HamburgerToggle from './hamburger-toggle/HamburgerToggle'
import ThemeToggle from './theme-toggle/ThemeToggle'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <HamburgerToggle />
      <ThemeToggle />
      <ContactButton />
    </div>
  )
}
