import styles from './Heading2.module.scss'

export default function Heading2({ children }) {
  return <h2 className={styles.heading2}>{children}</h2>
}
