import styled from 'styled-components'
import { Cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'
export const Container = styled.footer`
  background-color: ${Cores.cinza};
  padding: 32px 0;
`
export const SectionTitle = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
`
export const Link = styled(HashLink)`
  font-size: 14px;
  margin-top: 16px;
  margin-right: 24px;
  color: ${Cores.cinzaClaro};
  text-decoration: none;
  margin-bottom: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
