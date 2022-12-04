import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 15vh;
  }
`

const Shape = styled.span`
  position: absolute;
  bottom: -300px;

  width: 600px;
  height: 600px;

  border: 10px solid;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

export const Circle = styled(Shape)`
  left: -200px;

  border-radius: 50%;

  @media (max-width: 768px) {
    left: -30px;
    bottom: 50px;
  }
`

export const Square = styled(Shape)`
  right: -200px;

  transform: rotate(15deg);

  @media (max-width: 768px) {
    right: -20px;
    bottom: 150px;
  }
`