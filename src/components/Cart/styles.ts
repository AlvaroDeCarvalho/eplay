import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
export const SideBar = styled.aside`
  background: ${Cores.cinza};
  height: 100%;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 40px 16px 0 16px;

  ${ButtonContainer} {
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: block;
  color: ${Cores.branca};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${Cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${Cores.cinzaClaro};
  padding: 8px 0;
  position: relative;
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${Cores.branca};
    font-size: 16px;
    font-weight: bold;
  }

  span {
    color: ${Cores.branca};
    font-size: 16px;
    display: block;
    margin-top: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`
