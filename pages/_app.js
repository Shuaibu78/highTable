import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { Colors, media, FontSizes, FontFamily, BoxShadow} from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const theme = {...Colors, ...BoxShadow, ...FontFamily, ...FontSizes, ...media}
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
