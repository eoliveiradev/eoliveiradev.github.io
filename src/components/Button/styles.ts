import styled, { css } from "styled-components";

interface ContainerProps {
  show: boolean;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, show }) => css`

    padding: 8px 16px;
    border-radius: ${theme.BORDERRADIUS.DEFAULT};

    font-size: ${theme.SIZES.FONT.MOBILE.MD};
    color: ${theme.COLORS.BACKGROUND};

    background: ${theme.COLORS.BUTTON.PRIMARY};

    opacity: ${show ? 1 : 0};
    transition: opacity 4s, background 0.2s;

    &:hover {
      background: ${theme.COLORS.BUTTON.HOVER};
    }
  `}
`