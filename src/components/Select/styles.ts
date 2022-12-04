import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`


export const Options = styled.ul`
  position: absolute;
  top: calc(100% + 8px);

  min-width: 120%;
  padding: 8px;

  background: ${({ theme }) => theme.COLORS.PAPER};

  border: 1px solid;
  border-radius: ${({ theme }) => theme.BORDERRADIUS.HALF};
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL};

`

export const Option = styled.li`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export const OptionButton = styled.button`
  width: 100%;

  padding: 4px 8px;

  color: ${({ theme }) => theme.COLORS.TEXT};

  background: ${({ theme }) => theme.COLORS.PAPER};

  border-radius: ${({ theme }) => theme.BORDERRADIUS.HALF};

  transition: 0.2s;

  &:hover {
    filter: brightness(1.5)
  }
`