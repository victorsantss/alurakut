import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito',sans-serif;
    background-color: #A2A9B8;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
      </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
    </>
          )
}