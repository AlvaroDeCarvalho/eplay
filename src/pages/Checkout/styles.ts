import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  active: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0px'};
  align-items: flex-end;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  //o flex:auto: a largura disponivel sera destribuida igualmente entre os elementos

  height: 80px;

  width: 100%;
  label,
  select {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  label {
    width: 126px;
    max-width: 100%;
  }
  input {
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  small {
    color: #ff8383;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  padding: 0px 8px;
  border-radius: 8px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) => (props.active ? '#10AC84' : '#111')};
  height: 32px;
  border: none;
  margin-left: 32px;
  margin-bottom: 24px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`
