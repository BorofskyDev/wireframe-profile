import styles from './SmallSectionContainer.module.scss'

export default function SmallSectionContainer({children}) {
  return <div className={styles.smallSectionContainer} >{children}</div>
}
