import styles from './Heading4.module.scss'

export default function Heading4({children}) {
    return (
        <h4 className={styles.heading4}>{children}</h4>
    )
}