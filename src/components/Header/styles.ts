import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores, breakPoints } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  background-color: ${Cores.cinza};
  border-radius: 16px;
  margin-top: 40px;
  margin-bottom: 80px;

  a {
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const headerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    align-items: center;
    display: flex;

    @media (max-width: ${breakPoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const navMobile = styled.nav`
  display: none;

  &.is-open {
    @media (max-width: ${breakPoints.tablet}) {
      display: block;
    }
  }
`

export const Elementos = styled(Link)`
  margin-right: 16px;
  @media (max-width: ${breakPoints.tablet}) {
    margin-right: 0;
    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const ImagemLink = styled(Link)``

export const Hamburguer = styled.div`
  width: 32px;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${Cores.branca};
    margin-bottom: 4px;
  }
  @media (min-width: 767px) {
    display: none;
  }
`
