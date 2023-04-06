import '/styles/globals.scss'
import '/styles/Home.scss'
import '/styles/LobbyPage.scss'
import '/styles/WritePromptPage.scss'
import '/styles/DrawPromptPage.scss'

// Root component for all pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
