import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import TitleContainer from '../../layout-containers/title-container/TitleContainer'
import ContentContainer from '../../layout-containers/content-container/ContentContainer'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'}>
      <TitleContainer></TitleContainer>
      <ContentContainer></ContentContainer>
    </SectionContainer>
  )
}
