import Navbar from '../components/navbar'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <NextNProgress color="#09692c" startPosition={0.5} stopDelayMs={300} height={3} showOnShallow={true} />
    <Component {...pageProps} /></>
}

export default MyApp
