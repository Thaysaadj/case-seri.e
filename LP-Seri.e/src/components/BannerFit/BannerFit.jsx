import styles from './BannerFit.module.css'
import Fit from '../../assets/images/banner-fit.png'
import { TextTitle } from '../TextTitle/TextTile'
import Arrow from '../../assets/svg/arrow-right.svg'


export function BannerFit() {
  return (
    <section className={styles.sectionBannerFit}>
      <div className={styles.backgroundBannerFit}>
      </div>
      <div className={styles.containerTextBannerFit}>
        <TextTitle
          text="COLEÇÃO"
        />
      </div>
      <div className={styles.bannerFit}>
        <img src={Fit} alt="" />
        <div className={styles.textBannerFit}>
          <p className={styles.textTitleBannerFit}>Lorem ipsum dolor. </p>
          <div className={styles.linkBannerFit}>
            <a>Acessar Já <img src={Arrow} alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}