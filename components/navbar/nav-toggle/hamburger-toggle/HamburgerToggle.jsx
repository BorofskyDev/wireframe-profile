import styles from './HamburgerToggle.module.scss'

export default function HamburgerToggle({ handleClick}) {
  return (
    <div className={styles.hamburgerToggle}>
      <span className={styles.lineIsClosed}></span>
      <span className={styles.lineIsClosed}></span>
      <span className={styles.lineIsClosed}></span>
    </div>
  )
}
