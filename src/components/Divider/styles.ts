import styled from "styled-components";

export const Container = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL};
`