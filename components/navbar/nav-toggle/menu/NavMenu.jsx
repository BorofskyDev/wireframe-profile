import NavLink from './NavLink'
import styles from './NavMenu.module.scss'
import linkStyles from './NavLink.module.scss'

export default function NavMenu({ isMenuOpen }) {
  // const menuItems = [
  //   { name: 'Home', href: '#home' },
  //   { name: 'About', href: '#about' },
  //   { name: 'Projects', href: '#projects' },
  //   { name: 'Blog', href: '#blog' },
  // ]

  // return (
  //   <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
  //     <ul>
  //       {menuItems.map((item) => (
  //         <NavLink key={item.name} name={item.name} href={item.href} />
  //       ))}
  //     </ul>
  //   </nav>
  // )
  return (
    <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
      <ul>
        <li className={linkStyles.navLink}>
          <a href='#/'>Home</a>
        </li>
        <li className={linkStyles.navLink}>
          <a href='#/'>About</a>
        </li>
        <li className={linkStyles.navLink}>
          <a href='#/'>Projects</a>
        </li>
        <li className={linkStyles.navLink}>
          <a href='#/'>Blog</a>
        </li>
      </ul>
    </nav>
  )
}


