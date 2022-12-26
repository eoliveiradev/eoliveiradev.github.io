import styled, { css } from "styled-components";

export type AlignType = "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly";

interface Props {
  direction: "row" | "column";
  gap: 'SM' | 'MD' | 'LG' | 'XL' | 'DIVIDER';
  align: AlignType;
  justify: AlignType;
  fill: boolean;
  height: string;
}

const gapVariants = {
  SM: '16px',
  MD: '14px',
  LG: '32px',
  XL: '48px',
  DIVIDER: '320px'
}

export const Container = styled.div<Props>`
  ${(
  {
    direction,
    gap,
    align,
    justify,
    fill,
    height
  }) => css`

    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};
    gap: ${gapVariants[gap]};

    overflow: hidden;

    width: ${fill ? '100%' : 'auto'};
    min-height: ${height};

    justify-content: ${justify};
    align-items: ${align};

    @media (max-width: 768px) {
      justify-content: center;
    }
  `}
`