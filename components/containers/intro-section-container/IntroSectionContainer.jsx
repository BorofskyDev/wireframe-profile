import styles from './IntroSectionContainer.module.scss'

export default function IntroSectionContainer({ children, isSticky }) {
  return (
    <div  className={`${styles.introSectionContainer} ${isSticky ? styles.fixed : ''}`}>
      {children}
    </div>
  )
}
