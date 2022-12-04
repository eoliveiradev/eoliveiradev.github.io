import { useRef } from "react";
import { useIsVisible } from "../../Hooks/useIsVisible";
import { Container } from "./styles"

interface ComponentProps {
  onClick: () => void;
  title: string;
  animate?: boolean;
}

export const Button = (props: ComponentProps) => {
  const { animate , title, onClick } = props

  const container = useRef(null)

  const { isVisible } = useIsVisible(
    {
      ref: container,
      checkOnlyOnce: true
    }
  )

  return (
    <Container
      ref={container}
      show={animate ? isVisible : true}
      onClick={() => onClick()}
    >
      {title}
    </Container>
  )
}