import styles from './Navbar.module.scss'
import ContactButton from './contact/Contact'
import NavToggle from './nav-toggle/NavToggle'
import HamburgerToggle from './nav-toggle/hamburger-toggle/HamburgerToggle'
import ThemeToggle from './theme-toggle/ThemeToggle'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavToggle/>
      <ThemeToggle />
      <ContactButton />
    </div>
  )
}
