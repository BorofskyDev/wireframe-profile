import { MoonIcon } from '@heroicons/react/24/outline'
import styles from './DarkToggle.module.scss'

export default function DarkToggle() {
    return (
        <div className={styles.darkToggle}><MoonIcon className={styles.icon}/><span>Dark</span></div>
    )
}