import SectionTitle from '@/components/typography/section-title/SectionTitle'
import ContentContainer from '../../layout-containers/content-container/ContentContainer'
import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import StickyContainer from '../../layout-containers/sticky-container/StickyContainer'
import TitleContainer from '../../layout-containers/title-container/TitleContainer'
import SectionHeadingWrapper from '../../wrappers/section-heading-wrapper/SectionHeadingWrapper'
import SectionTitleWrapper from '../../wrappers/section-title-wrapper/SectionTitleWrapper'
import InternalLink from '@/components/links/internal-link/InternalLink'

export default function AboutSection() {
  return (
    <SectionContainer id={'about'}>
      <TitleContainer>
        <StickyContainer>
          <SectionHeadingWrapper>
            <SectionTitleWrapper>
              <SectionTitle>About</SectionTitle>
            </SectionTitleWrapper>

            <InternalLink href={'#projects'}>Skip to Projects</InternalLink>
          </SectionHeadingWrapper>
        </StickyContainer>
      </TitleContainer>
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
