import styles from './IntroSectionContainer.module.scss'

export default function IntroSectionContainer({ children, id }) {
  return (
    <section id={id} className={styles.introSectionContainer}>
      {children}
    </section>
  )
}
