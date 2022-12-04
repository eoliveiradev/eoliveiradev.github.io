import styled, { css } from "styled-components";

const variants = {
  left: { x: '-100vw', y: '0' },
  right: { x: '100vw', y: '0' },
  top: { y: '-100vh', x: '0' },
  bottom: { y: '100vh', x: '0' },
}

interface SliderProps {
  from: "left" | "right" | "top" | "bottom";
  duration: string;
  isOnScreen: boolean;
}

export const Slider = styled.div<SliderProps>`
  ${({ from, duration, isOnScreen }) => css`

    transform: ${isOnScreen
      ? `translate(0, 0)`
      : `translate(${variants[from].x}, ${variants[from].y})`
    };

    transition: transform ${duration} ease-in-out;

  `}
`

