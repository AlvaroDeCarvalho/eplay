import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

type Props = {
  backgroundBanner: string
}

export const Imagem = styled.div<Props>`
  position: relative;
  background-image: url(${(props) => props.backgroundBanner});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 560px;
  display: block;
  font-weight: bold;

  .container {
    padding-top: 240px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    cursor: pointer;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
