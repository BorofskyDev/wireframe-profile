import styles from './SectionContainer.module.scss'

export default function SectionContainer({children, id}) {
    return (
        <section id={id} className={styles.sectionContainer}>
            {children}
        </section>
    )
}