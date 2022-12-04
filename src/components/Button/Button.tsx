import { useRef } from "react";
import { useIsVisible } from "../../Hooks/useIsVisible";
import { Container } from "./styles"

interface ComponentProps {
  onClick: () => void;
  title: string;
  animate?: boolean;
  fontSize?: 'MD' | 'SM';
}

export const Button = (props: ComponentProps) => {
  const {
    animate,
    title,
    onClick,
    fontSize = 'MD'
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
      ref={container}
      fontSize={fontSize}
      show={animate ? isVisible : true}
      onClick={() => onClick()}
    >
      {title}
    </Container>
  )
}