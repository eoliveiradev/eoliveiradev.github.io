import { useEffect, useState } from "react"
import { Container, ScrollIndicatorIcon } from "./styles"

export const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showScrollIndicator = scrollPosition < 100

  return (
    <Container>
      <ScrollIndicatorIcon 
        show={showScrollIndicator}
      />
    </Container>
  )
}