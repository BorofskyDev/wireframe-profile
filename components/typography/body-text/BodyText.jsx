import styles from './BodyText.module.scss'

export default function BodyText({ children, className }) {
    const bodyClasses = `${styles.bodyText} ${className || ''}`

    return <p className={bodyClasses}>{children}</p>
    }


    // add framer motion to this