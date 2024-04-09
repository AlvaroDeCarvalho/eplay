import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  padding: 8px 16px;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  padding: 8px 16px;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
`
