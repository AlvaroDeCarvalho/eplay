import styled from 'styled-components'

import { Props } from '.'

import { TagContainer } from '../Tag/styles'
import { Cores, breakPoints } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'games' | 'title'>>`
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
    margin-bottom: 16px;
  }
  ${TagContainer} {
    position: relative;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
