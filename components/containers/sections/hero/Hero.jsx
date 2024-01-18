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

export default function HeroSection() {
  return (
    <SectionContainer id={'home'} className={styles.hero}>
      <TitleContainer>
        <StickyContainer>
          <TitleWrapper>
            <Heading1>Fullstack Creative Developer</Heading1>
            <Heading4>Design, Develop, Deploy</Heading4>
          </TitleWrapper>
          <div className={styles.image}>
            <Image src={joelBorofsky} alt='Joel Borofsky' height={68} width={50} />
          </div>

        </StickyContainer>
      </TitleContainer>
      <ContentContainer></ContentContainer>
    </SectionContainer>
  )
}
