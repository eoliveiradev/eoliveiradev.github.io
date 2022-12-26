import React from "react";
import { ReactNode } from "react";
import { AlignType, Container } from "./styles";

interface ComponentProps {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: 'SM' | 'MD' | 'LG' | 'XL' | 'DIVIDER';
  align?: AlignType;
  justify?: AlignType;
  fill?: boolean;
  height?: string;
}

export const FlexBox = React.forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const {
    children,
    direction = "row",
    gap = "SM",
    align = "flex-start",
    justify = "flex-start",
    fill = false,
    height = "auto",
  } = props;

  return (
    <Container
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      fill={fill}
      height={height}
      ref={ref}
    >
      {children}
    </Container>
  )
})