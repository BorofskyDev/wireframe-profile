import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'
import styles from './HeroCopyright.module.scss'

export default function HeroCopyright({ children }) {
  return (
    <SmallSectionContainer className={styles.heroContent}>
      <p>{children}</p>
    </SmallSectionContainer>
  )
}
