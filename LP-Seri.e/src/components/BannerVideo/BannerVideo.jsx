import styles from './BannerVideo.module.css'
import ImageVideo from '../../assets/images/bannerVideo.png'


export function BannerVideo() {
  return (
    <section className={styles.sectionVideo}>
      <div className={styles.textYouTube}>
        <p>#YOUTUBE</p>
      </div>
      <div className={styles.containerVideo}>
        <img src={ImageVideo} alt="image-static" />
        <p className={styles.txtVideo}>São Paulo, 12 de Abril de 2021.</p>
      </div>
    </section>
  )
}