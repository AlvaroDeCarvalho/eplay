import styled from 'styled-components'

import { colors } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.gray : 'transparent'};
  padding: 8px 16px;
  border: ${(props) =>
    props.variant === 'primary' ? colors.green : colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  position: relative;
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;

  &::after {
    content: '';
    border-radius: 8px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border: none;
    background-color: #000;
    opacity: 0;
  }

  &:hover::after {
    opacity: 0.26;
  }
`
