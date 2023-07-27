import styles from './BannerVideo.module.css'
import ImageVideo from '../../assets/images/image-video.png'
import Play from '../../assets/svg/play.svg'
import LogoVideo from '../../assets/svg/e.svg'

export function BannerVideo() {
  return (
    <section className={styles.sectionVideo}>
      <p>#YOUTUBE</p>
      <div className={styles.containerVideo}>
        <img src={ImageVideo} alt="image-static" />
        <div className={styles.containerLogoVideo}>
          <div className={styles.logoVideo}>
            <img src={LogoVideo} alt="" />
            <p>São Paulo, 12 de Abril de 2021.</p>
          </div>
          <div className={styles.imgePlay}>
            <img src={Play} alt="play" />
          </div>
        </div>
      </div>
    </section>
  )
}