import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from "next-auth/react";
import { Colors, media, FontSizes, FontFamily, BoxShadow } from "../styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const theme = { ...Colors, ...BoxShadow, ...FontFamily, ...FontSizes, ...media }
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
