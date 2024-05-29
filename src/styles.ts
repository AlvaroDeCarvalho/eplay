import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const breakPoints = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
    list-style: none;

  }

  body {
    background-color: ${colors.black};
    color: ${colors.white} ;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakPoints.desktop}){
        max-width: 80%;
    }
  }
  `
