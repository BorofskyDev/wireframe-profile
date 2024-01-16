import MainHeading from '@/components/headings/main-heading/MainHeading'
import IntroSectionContainer from '../../intro-section-container/IntroSectionContainer'
import styles from './Hero.module.scss'

export default function HeroSection() {
  return (
    <IntroSectionContainer id={'/'}>
      <div className={styles.hero}>
        <MainHeading>Creative Fullstack Developer</MainHeading>
      </div>
    </IntroSectionContainer>
  )
}
