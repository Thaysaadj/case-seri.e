import email from '../../assets/svg/envelope.svg'
import styles from './NewsLatter.module.css'


export function NewsLatter() {
  return (
    <section className={styles.sectionNews}>
      <div className={styles.containerNews}>
        <div className={styles.contentTextNews}>
          <p className={styles.titleNews} >News Latter</p>
          <p className={styles.subTitleNews}>Cadastre seu e-mail e receba <strong>novidades</strong></p>
        </div>
        <div className={styles.inputNews}>
          <svg width="19" height="14" viewBox="0 0 19 14" fill="909090" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8296 4.61487C17.021 5.24768 16.0015 6.02112 12.4155 8.62268C11.7124 9.15002 10.4116 10.3102 9.18115 10.3102C7.91553 10.3102 6.6499 9.15002 5.91162 8.62268C2.32568 6.02112 1.30615 5.24768 0.497559 4.61487C0.356934 4.5094 0.181152 4.61487 0.181152 4.79065V11.9625C0.181152 12.9117 0.919434 13.65 1.86865 13.65H16.4937C17.4077 13.65 18.1812 12.9117 18.1812 11.9625V4.79065C18.1812 4.61487 17.9702 4.5094 17.8296 4.61487ZM9.18115 9.15002C9.98975 9.18518 11.1499 8.13049 11.7476 7.70862C16.4233 4.33362 16.7749 4.01721 17.8296 3.17346C18.0405 3.03284 18.1812 2.78674 18.1812 2.50549V1.83752C18.1812 0.923462 17.4077 0.150024 16.4937 0.150024H1.86865C0.919434 0.150024 0.181152 0.923462 0.181152 1.83752V2.50549C0.181152 2.78674 0.286621 3.03284 0.497559 3.17346C1.55225 4.01721 1.90381 4.33362 6.57959 7.70862C7.17725 8.13049 8.3374 9.18518 9.18115 9.15002Z" fill="black" />
          </svg>

          <input type="text" name="news-latter" placeholder="seu@email.com.br" />
        </div>
        <div className={styles.buttonNews}>
          <button>Cadastrar</button>
        </div>
      </div>
    </section>
  )
}