import { BannerFit } from "./components/BannerFit/BannerFit"
import { BannerVideo } from "./components/BannerVideo/BannerVideo"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { MainBanner } from "./components/MainBanner/MainBanner"
import { NewsLatter } from "./components/NewsLatter/NewsLatter"
import { Shelf } from "./components/Shelf/Shelf"
import './global.css'
import EFixed from '../../LP-Seri.e/src/assets/svg/e-fixed.svg'
import styles from './App.module.css'
function App() {

  return (
    <section className={styles.sectionMain}>

      <Header/>
      <MainBanner/>
      <Shelf/>
      <BannerVideo/>
      <BannerFit/>
      <Shelf/>
      <NewsLatter/>
      <Footer/>
      <div className={styles.contentHelp}>
        <img src={EFixed} alt="ajuda" />
      </div>
    </section>
  )
}

export default App
