import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "../../Hooks/useIsVisible";
import { Container, Subtitle, Title } from "./styles"

interface ComponentProps {
  title?: string;
  subtitle?: string;
  animate?: boolean;
  align?: 'left' | 'center';
}

export const HighLight = (props: ComponentProps) => {
  const {
    title,
    subtitle,
    align = 'left',
    animate = false
  } = props

  const container = useRef(null)

  const { isVisible } = useIsVisible(
    {
      ref: container,
      checkOnlyOnce: true
    }
  )

  return (
    <Container
      align={align}
      show={animate ? isVisible : true}
      ref={container}
    >
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}