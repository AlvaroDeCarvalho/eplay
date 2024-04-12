import styled from 'styled-components'

export const Container = styled.section`
  padding: 32px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
`
