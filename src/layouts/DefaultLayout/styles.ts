import styled from "styled-components";

export const Container = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  overflow: hidden;
`

export const Content = styled.section`
  display: flex;
  width: 90%;
  max-width: ${({ theme }) => theme.SIZES.CONTENT_WIDTH};
  min-height: calc(100vh - ${({ theme }) => theme.SIZES.HEADER_HEIGHT});
  
  padding: 32px 0px;
  @media (min-width: 768px) {
    padding: 96px 0px;
  }

  overflow: auto;
`