import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { BackgroundImg, GlobalStyles } from '../styles/global'
import { DefaultTheme } from '../styles/themes/default'
import { ToastContainer } from 'react-toastify';
import BackgroundImage from '../assets/background-gradient.png';
import NextNProgress from 'nextjs-progressbar';

import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <NextNProgress 
        color={ DefaultTheme.colors['button-green'] }
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <GlobalStyles />
        <BackgroundImg alt='fundo' src={BackgroundImage} />
        <Component {...pageProps} />
        <ToastContainer />
    </ThemeProvider>
  )
}

export default MyApp
