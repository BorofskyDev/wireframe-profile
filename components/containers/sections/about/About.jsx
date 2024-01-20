import ContentContainer from '../../layout-containers/content-container/ContentContainer'
import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import AboutTopContainer from './about-top-container/AboutTopContainer'

export default function AboutSection() {
  return (
    <SectionContainer id={'about'}>
      <AboutTopContainer />
      <ContentContainer>
        [MediumContainer] 
            [ContainerTitleWrapper] 
                [MediumTitle /]
            [/ContainerTitleWrapper] 
            [MediumContent /] 
        [/MediumContainer]
      </ContentContainer>
    </SectionContainer>
  )
}
