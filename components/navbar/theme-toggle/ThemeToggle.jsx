import DarkToggle from './dark/DarkToggle'
import LightToggle from './light/LightToggle'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
    return (
        <div className={styles.themeToggle}>
            <LightToggle />
            <DarkToggle />
        </div>
    )
}