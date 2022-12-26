import styled, { keyframes } from "styled-components";
import { ArrowDown } from "phosphor-react";

export const Container = styled.div`
  position: fixed;

  left: 50%;
  bottom: 60px;

  transform: translateX(-50%);
`

const animation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

interface Props {
  show: boolean;
}

export const ScrollIndicatorIcon = styled(ArrowDown).attrs({
  size: 40,
  weight: "bold"
})<Props>`

  opacity: ${props => props.show ? 1 : 0};

  animation: ${animation} 1.5s infinite ease-in;
  transition: opacity 0.5s ease-in;

  @media(max-width: 768px) {
    display: none;
  }
`