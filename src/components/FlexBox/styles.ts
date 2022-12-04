import styled, { css } from "styled-components";

export type AlignType = "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly";

interface Props {
  direction: "row" | "column";
  gap: 'SM' | 'MD' | 'LG' | 'XL';
  align: AlignType;
  justify: AlignType;
  fill: boolean;
}

const gapVariants = {
  SM: '8px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
}

export const Container = styled.div<Props>`
  ${(
  {
    direction,
    gap,
    align,
    justify,
    fill
  }) => css`

    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};
    gap: ${gapVariants[gap]};

    overflow: hidden;

    width: ${fill ? '100%' : 'auto'};

    justify-content: ${justify};
    align-items: ${align};

    @media (max-width: 768px) {
      justify-content: center;
    }
  `}
`