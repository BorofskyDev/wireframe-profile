import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import HeroTopContainer from './hero-top-container/HeroTopContainer'
import styles from './Hero.module.scss'
import HeroBottomContainer from './hero-bottom-container/HeroBottomContainer'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'} className={styles.hero}>
      <HeroTopContainer />
      <HeroBottomContainer />
    </SectionContainer>
  )
}
