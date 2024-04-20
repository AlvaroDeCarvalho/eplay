import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#fff',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
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
    background-color: ${Cores.preto};
    color: ${Cores.branca} ;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `
