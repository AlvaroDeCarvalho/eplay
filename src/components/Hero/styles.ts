import styled from 'styled-components'
import { Cores, breakPoints } from '../../styles'
import { TagContainer } from '../Tag/styles'

type Props = {
  backgroundcover: string
}

export const Banner = styled.div<Props>`
  position: relative;
  background-image: url(${(props) => props.backgroundcover});

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  display: block;
  height: 490px;
  width: 100%;

  padding-top: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }
  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${Cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: none;
    }
  }
`
