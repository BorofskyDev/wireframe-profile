import styles from './SecondHeading.module.scss'

export default function SecondHeading({ children }) {
  return <h2 className={styles.secondHeading}>{children}</h2>
}
