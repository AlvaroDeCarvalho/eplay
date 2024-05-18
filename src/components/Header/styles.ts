import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'
export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  background-color: ${Cores.cinza};
  border-radius: 16px;
  margin-top: 40px;
  margin-bottom: 80px;
  justify-content: space-between;

  a {
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
  div {
    align-items: center;
    display: flex;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const Elementos = styled(Link)`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`
export const ImagemLink = styled(Link)``
