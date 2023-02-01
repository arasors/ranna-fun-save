import '../styles/tailwind.css'
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return(
      <ThemeProvider value={}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
