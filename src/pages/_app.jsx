import '/styles/globals.scss'
import '/styles/Home.scss'

// Root component for all pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
