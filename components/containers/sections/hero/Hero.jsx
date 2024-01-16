import HeroTitle from './title-section/HeroTitle'
import styles from './Hero.module.scss'
import SectionContainer from '../../section-container/SectionContainer'
import HeroContent from './content-section/HeroContent'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'}>
      <HeroTitle />
      <HeroContent />
    </SectionContainer>
  )
}
