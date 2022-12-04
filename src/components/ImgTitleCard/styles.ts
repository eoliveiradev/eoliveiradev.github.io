import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  width: 200px;

  min-height: 280px;

  padding: 32px 8px;

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL};
  border-radius: ${({ theme }) => theme.BORDERRADIUS.HALF};

`

export const Image = styled.img`
  width: 120px;
  height: 120px;

  /* border-radius: 50%; */
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZES.FONT.SM};
`