import SmallSectionContainer from '@/components/containers/small-section-container/SmallSectionContainer'

export default function HeroCopyright({ children }) {
  return (
    <SmallSectionContainer >
      <p>{children}</p>
    </SmallSectionContainer>
  )
}
