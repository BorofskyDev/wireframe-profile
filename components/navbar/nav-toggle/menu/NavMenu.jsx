import NavLink from './NavLink'
import styles from './NavMenu.module.scss'

export default function NavMenu({ isMenuOpen }) {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
      <ul>
        {menuItems.map((item) => (
          <NavLink key={item.name} name={item.name} href={item.href} />
        ))}
      </ul>
    </nav>
  )
}
