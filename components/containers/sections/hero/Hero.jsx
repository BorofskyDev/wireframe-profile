'use client'
import { useRef } from 'react'
import { useStickySection } from '@/libs/hooks/useStickySection'
import HeroTitle from './title-section/HeroTitle'
import SectionContainer from '../../section-container/SectionContainer'
import HeroContent from './content-section/HeroContent'

export default function HeroSection() {
  const contentRef = useRef(null)
  const isSticky = useStickySection(contentRef)
  return (
    <SectionContainer id={'home'}>
      <HeroTitle isSticky={isSticky} />
      <HeroContent isSticky={isSticky} ref={contentRef} />
    </SectionContainer>
  )
}
