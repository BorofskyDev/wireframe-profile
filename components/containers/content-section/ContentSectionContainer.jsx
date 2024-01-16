import styles from './ContentSectionContainer.module.scss'

export default function ContentSectionContainer({children}) {
    return (
        <div className={styles.contentSectionContainer}>
            {children}
        </div>
    )
}