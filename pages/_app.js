import '../styles/globals.css'
import GlobalStates from '../components/GlobalStates'

function MyApp({ Component, pageProps }) {
  return (
  <GlobalStates>
  <Component {...pageProps} />
  </GlobalStates>
  )
}

export default MyApp
