import '../styles/globals.css';
import { AnimateSharedLayout } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
