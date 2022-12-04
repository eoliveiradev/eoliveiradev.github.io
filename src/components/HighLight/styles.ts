import styled, { css } from "styled-components";

interface ContainerProps {
  align: 'left' | 'center';
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 2s ease-in-out;

  @media (min-width: 768px) {
    gap: 8px;
    align-items: ${({ align }) => align === 'center' ? 'center' : 'flex-start'};
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`

    font-size: ${theme.SIZES.FONT.LG};

    @media (max-width: 768px) {
      font-size: ${theme.SIZES.FONT.MOBILE.LG};
    }
  `}
`
export const Subtitle = styled.h2`
  ${({ theme }) => css`

      font-size: ${theme.SIZES.FONT.MD};
    
      @media (max-width: 768px) {
        font-size: ${theme.SIZES.FONT.MOBILE.MD};
      }

  `} 
`