import styled from 'styled-components'

import { Cores } from '../../styles'
import { Props } from '.'

type PropsWithoutChildren = Omit<Props, 'children'>

export const TagContainer = styled.div<PropsWithoutChildren>`
  background-color: ${Cores.verde};
  display: inline-block;
  color: ${Cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
`
