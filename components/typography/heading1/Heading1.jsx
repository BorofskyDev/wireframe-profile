import styles from './Heading1.module.scss'

export default function Heading1({ children }) {
  return <h1 className={styles.heading1}>{children}</h1>
}
