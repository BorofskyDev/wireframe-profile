import { SunIcon } from '@heroicons/react/24/outline'

import styles from './LightToggle.module.scss'

export default function LightToggle() {
    return (
        <div className={styles.lightToggle}><SunIcon className={styles.icon} /><span>Light</span></div>
    )
}