import styles from './Heading3.module.scss'

export default function Heading3({children}) {
    return (
        <h3 className={styles.heading3}>{children}</h3>
    )
}