import HeroSection from '@/components/containers/sections/hero/Hero'
import AboutSection from '@/components/containers/sections/about/About'
import Projects from '@/components/containers/sections/projects/Projects'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <div>[Blog]</div>
      <div>[Contact]</div>
    </>
  )
}
