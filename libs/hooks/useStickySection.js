import { useEffect, useState } from 'react'

export function useStickySection(contentRef) {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (contentRef.current) {
      const heroContentBottom =
        contentRef.current.getBoundingClientRect().bottom
      setIsSticky(window.scrollY < heroContentBottom)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [contentRef])

  return isSticky
}
