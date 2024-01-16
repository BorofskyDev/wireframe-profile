import styles from './IntroSectionContainer.module.scss'

export default function IntroSectionContainer({ children }) {
  return (
    <div  className={styles.introSectionContainer}>
      {children}
    </div>
  )
}
