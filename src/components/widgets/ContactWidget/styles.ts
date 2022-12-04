import styled, { keyframes } from "styled-components";
import { EnvelopeSimple, X } from 'phosphor-react'

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  right: 60px;
  bottom: 60px;

  @media (max-width: 768px) {
    right: 30px;
    bottom: 30px;
  }
`

export const Card = styled.div`
  width: 228px;
  height: 228px;

  animation: 0.8s ${show};
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.BUTTON.PRIMARY};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON.HOVER};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const IconAttrs = {
  size: 32,
  weight: 'bold'
}

export const CloseIcon = styled(X).attrs(({ theme }) => ({
  ...IconAttrs,
  color: theme.COLORS.TEXT
}))``

export const MailIcon = styled(EnvelopeSimple).attrs(({ theme }) => ({
  ...IconAttrs,
  color: theme.COLORS.TEXT
}))``

