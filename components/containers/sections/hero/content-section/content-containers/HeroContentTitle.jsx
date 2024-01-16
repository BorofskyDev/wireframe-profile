import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'

import Heading3 from '@/components/headings/heading3/Heading3'

export default function HeroContentTitle({ children }) {
  return (
    <SmallSectionContainer >
      <Heading3>{children}</Heading3>
    </SmallSectionContainer>
  )
}
