import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  align-items: center;
  justify-content: center;
  opacity: 0;
`

export const Item = styled.li`
  position: relative;
  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    //mesma função do background-size, porem para elementos que sao objetos e nao componentes
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      cursor: pointer;
      opacity: 0.73;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &.active {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-family: 18px;
      font-weight: bold;
    }
    img {
      cursor: pointer;
    }
  }
  > img {
    width: 100%;
  }
  img,
  iframe {
    display: block;
    max-width: 100%;
  }
  iframe {
    width: 100%;
    height: 480px;
  }
`
