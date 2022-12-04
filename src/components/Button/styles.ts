import styled, { css } from "styled-components";

interface ContainerProps {
  show: boolean;
  fontSize: 'SM' | 'MD' | 'LG';
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, show, fontSize }) => css`

    padding: 8px 16px;
    border-radius: ${theme.BORDERRADIUS.DEFAULT};

    font-size: ${theme.SIZES.FONT.MOBILE[fontSize]};
    color: ${theme.COLORS.BACKGROUND};

    background: ${theme.COLORS.BUTTON.PRIMARY};

    opacity: ${show ? 1 : 0};
    transition: opacity 4s, background 0.2s;

    &:hover {
      background: ${theme.COLORS.BUTTON.HOVER};
    }
  `}
`