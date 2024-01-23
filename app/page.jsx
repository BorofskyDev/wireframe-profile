import HeroSection from '@/components/containers/sections/hero/Hero'
import AboutSection from '@/components/containers/sections/about/About'
import Projects from '@/components/containers/sections/projects/Projects'
import BlogSection from '@/components/containers/sections/blog/Blog'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
      <BlogSection />
      <div>[Contact]</div>
    </>
  )
}
