import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 20px;
  }

  body {
    color: #3c3c3c;
    margin: 0;
    font-family: Amiri;
  }

  a {
    touch-action: manipulation;
  }

  code {
    background-color: #f7f7f9;
    border-radius: .25rem;
    color: #bd4147;
    font-size: 90%;
    padding: .2rem .4rem;
  }

  article {
    .subtitle {
      color: #3c3c3c;
      display: block;
      font-family: Poppins;
      font-size: 0.90em;
      font-weight: 500;
    }

    .table-responsive {
      width: 100%;
    }
  }

  table {
    border-collapse: collapse;
    font-family: Poppins;
    font-size: 0.85em;
    width: 100%;

    th, tr, td {
      border: 1px solid #ccc;
      padding: 0.4rem 0.5rem;
    }

    th {
      background-color: #e1e1e1;
      text-align: left;
    }
  }

  .gatsby-highlight {
    font-size: 0.80em;
  }
`

export default GlobalStyle
