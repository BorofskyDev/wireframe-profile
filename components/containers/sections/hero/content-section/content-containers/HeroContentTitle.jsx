import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'
import styles from './HeroContentTitle.module.scss'
import Heading3 from '@/components/headings/heading3/Heading3'

export default function HeroContentTitle({ children }) {
  return (
    <SmallSectionContainer className={styles.heroContentTitle}>
      <Heading3>{children}</Heading3>
    </SmallSectionContainer>
  )
}
