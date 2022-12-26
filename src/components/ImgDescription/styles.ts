import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 680px;
  min-height: 228px;

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL};
  border-radius: ${({ theme }) => theme.BORDERRADIUS.HALF};

  @media(max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    padding: 40px;
  }
`

export const Image = styled.img`
  width: 228px;
  height: 228px;

  @media(max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 40px;

  @media(max-width: 768px) {
    padding: 0px;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.SIZES.FONT.MD};
  text-align: center;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.SIZES.FONT.MOBILE.MD};
  text-align: center;
`