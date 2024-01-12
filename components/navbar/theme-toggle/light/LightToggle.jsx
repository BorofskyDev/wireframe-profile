

import { SunIcon } from '@heroicons/react/24/outline'

import styles from './LightToggle.module.scss'
import activeState from '../ThemeToggle.module.scss'

export default function LightToggle() {
  return (
    <div className={`${styles.lightToggle} ${activeState.active}`}>
      <SunIcon className={styles.icon} />
      <span>Light</span>
    </div>
  )
}
