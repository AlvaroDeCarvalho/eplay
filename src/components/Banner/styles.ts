import styled from 'styled-components'
import imagem from '../../assets/images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  background-image: url(${imagem});
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
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
    cursor: pointer;
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
