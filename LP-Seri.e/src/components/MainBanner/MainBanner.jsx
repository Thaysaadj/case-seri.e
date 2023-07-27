import BannerPrincipal from '../../assets/images/main-banner.png'
import BannerLef from '../../assets/images/banner2.png'
import BannerRight from '../../assets/images/banner1.png'
import Arrow from '../../assets/svg/arrow-right.svg'
import styles from './MainBanner.module.css'

export function MainBanner() {

  return (
    <section className={styles.sectionMainBanner}>
      <div className={styles.containerMainBanner}>
        <img className={styles.mainBanner} src={BannerPrincipal} alt="Banner Principal"/>
        <div className={styles.containerTextMainBanner}>
          <p className={styles.textMainBanner}>Lorem ipsum dolor. </p>
          <div className={styles.linkMainBanner}>
            <a>Acessar Já <img src={Arrow} alt="" /></a>
          </div>
        </div>
      </div>
      <section className={styles.sectionSecondariBanner}>
        <div className={styles.containerBannerRight}>
          <img src={BannerRight} alt="Banner Direito" />
          <div className={styles.containerTextBannerRight}>
            <p className={styles.textBannerRight}>Lorem ipsum dolor. </p>
            <div className={styles.linkBannerRight}>
              <a>Acessar Já <img src={Arrow} alt="" /></a>
            </div>
          </div>
        </div>
        <div className={styles.containerBannerLeft}>
          <img src={BannerLef} alt="Banner Esquerdo" />
          <div className={styles.containerTextBannerLeft}>
            <p className={styles.textBannerLeft}>Lorem ipsum dolor. </p>
            <div className={styles.linkBannerLeft}>
              <a>Acessar Já <img src={Arrow} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}