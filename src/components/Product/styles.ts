import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${Cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${Cores.branca};
  display: block;
  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const ComponentesInfo = styled.div`
  top: 16px;
  right: 16px;
  position: absolute;
`
