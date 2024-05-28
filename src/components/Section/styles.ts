import styled from 'styled-components'

import { TagContainer } from '../Tag/styles'
import { Props } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'children'>>`
  padding: 32px;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.preto : Cores.cinza};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.cinza : Cores.preto};
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  ${TagContainer} {
    position: relative;
  }
`
