import styled from 'styled-components'
import { Cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0px'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  //o flex:auto: a largura disponivel sera destribuida igualmente entre os elementos
  flex: auto;
  label,
  select {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    border: 1px solid ${Cores.branca};
    background-color: ${Cores.branca};
    height: 32px;
    padding: 0 8px;
    width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  }
`

export const TabButton = styled.button<TabButtonProps>`
  padding: 0px 8px;
  border-radius: 8px;
  font-weight: bold;
  color: ${Cores.branca};
  background-color: ${(props) => (props.isActive ? Cores.verde : Cores.preto)};
  height: 32px;
  border: none;
  margin-left: 32px;
  margin-bottom: 24px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`
