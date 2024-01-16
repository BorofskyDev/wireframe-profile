

import { pairedData } from '@/libs/functions/pairedData'

import HeroContentTitle from './content-containers/HeroContentTitle'
import HeroCopyright from './content-containers/HeroCopyright'
import styles from './HeroContent.module.scss'

export default function HeroContent() {
    console.log(pairedData)
  return (
    <div className={styles.heroContent}>
      {pairedData.map((pair, index) => {
        const isReverseOrder = index % 2 !== 0
        return (
          <div
            className={`${styles.gridItem} ${
              isReverseOrder ? styles.reverseOrder : ''
            }`}
            key={index}
          >
            <HeroContentTitle>{pair.title}</HeroContentTitle>
            <HeroCopyright>{pair.content}</HeroCopyright>
          </div>
        )
      })}
    </div>
  )
}