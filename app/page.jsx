import HeroSection from '@/components/containers/sections/hero/Hero'
import styles from '../styles/global.scss'
import AboutSection from '@/components/containers/sections/about/About'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div>[Projects]</div>
      <div>[Blog]</div>
      <div>[Contact]</div>
    </>
  )
}
