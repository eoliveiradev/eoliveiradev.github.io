import { ReactNode } from "react";
import { AlignType, Container } from "./styles";

interface ComponentProps {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: 'SM' | 'MD' | 'LG' | 'XL';
  align?: AlignType;
  justify?: AlignType;
  fill?: boolean;
}

export const FlexBox = (props: ComponentProps) => {
  const {
    children,
    direction = "row",
    gap = "SM",
    align = "flex-start",
    justify = "flex-start",
    fill = false,
  } = props;

  return (
    <Container
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      fill={fill}
    >
      {children}
    </Container>
  )
}