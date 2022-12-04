import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.SIZES.HEADER_HEIGHT};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: ${({ theme }) => theme.SIZES.CONTENT_WIDTH};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.SIZES.FONT.SM};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.SIZES.FONT.MOBILE.SM};
  }
`

export const TitleHighlight = styled.span`
  color:  ${({ theme }) => theme.COLORS.PRIMARY};
`