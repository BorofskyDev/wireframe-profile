import Image from 'next/image'
import SectionContainer from '../../layout-containers/section-container/SectionContainer'
import TitleContainer from '../../layout-containers/title-container/TitleContainer'
import ContentContainer from '../../layout-containers/content-container/ContentContainer'
import StickyContainer from '../../layout-containers/sticky-container/StickyContainer'
import TitleWrapper from '../../wrappers/title-wrapper/TitleWrapper'
import Heading1 from '@/components/typography/heading1/Heading1'
import Heading4 from '@/components/typography/heading4/Heading4'
import joelBorofsky from '@/public/images/profile/joelBorofsky.png'
import styles from './Hero.module.scss'
import BodyText from '@/components/typography/body-text/BodyText'
import HeroContent from './content-section/HeroContent'

export default function HeroSection() {
  return (
    <SectionContainer id={'home'} className={styles.hero}>
      <TitleContainer>
        <StickyContainer>
          <TitleWrapper>
            <Heading1>Fullstack Creative Developer</Heading1>
            <Heading4>Design, Develop, Deploy</Heading4>
          </TitleWrapper>
          <div className={styles.imageContainer}>
            <Image
              src={joelBorofsky}
              alt='Joel Borofsky'
              height={430}
              width={330}
              className={styles.image}
            />
          </div>
          <BodyText>
            Web designer with a user-first (with an emphasis on accessibility!)
            approach to design, web app developer with a stack that includes
            Next.js, SCSS, Nodejs, and MongoDB, and all with a business
            background in sales and marketing. Also likes cats.
          </BodyText>
        </StickyContainer>
      </TitleContainer>
      <ContentContainer>
        <HeroContent />
      </ContentContainer>
    </SectionContainer>
  )
}
