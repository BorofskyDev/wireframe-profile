import Image from 'next/image'
import IntroSectionContainer from '@/components/containers/intro-section-container/IntroSectionContainer'
import MainHeading from '@/components/headings/main-heading/MainHeading'
import Heading4 from '@/components/headings/heading4/Heading4'
import joelBorofsky from '@/public/images/profile/joelBorofskyProfile.png'
import styles from './HeroTitle.module.scss'

export default function HeroTitle() {
  return (
    <IntroSectionContainer >
      <div className={styles.heroTitle}>
        <div className={styles.section}>
          <MainHeading>Creative Fullstack Developer</MainHeading>
          <Heading4>Design, Develop, Deploy</Heading4>
        </div>
        <div className={styles.image}>
          <Image
            src={joelBorofsky}
            alt='Joel Borofsky'
            height={95}
            width={75}
            className={styles.imageDingAnSich}
          />
        </div>
        <p>
          Web designer with a user-first approach to design and a web app
          developer with a stack that includes Next.js, SCSS, Nodejs, MongoDB,
          and more, all with a business background in sales and marketing. Also
          likes cats.
        </p>
      </div>
    </IntroSectionContainer>
  )
}
