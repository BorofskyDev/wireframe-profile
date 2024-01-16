import styles from './LargeSectionContainer.module.scss'

export default function LargeSectionContainer({children}) {
   return <div className={styles.largeSectionContainer}>{children}</div>
}
