import HeroTitle from './title-section/HeroTitle'
import styles from './Hero.module.scss'
import SectionContainer from '../../section-container/SectionContainer'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'}>
      <HeroTitle />
    </SectionContainer>
  )
}
