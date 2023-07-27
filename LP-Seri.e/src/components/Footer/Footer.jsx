import LogoBlack from '../../assets/images/logo-black.png'
import Instagram from '../../assets/svg/instagram.svg'
import Facebook from '../../assets/svg/facebook.svg'
import styles from './Footer.module.css'
import { PreFooter } from '../PreFooter/PreFooter'

export function Footer() {
  return (
    <>
      <section className={styles.sectionFooter}>
        <div className={styles.containerLogo}>
          <img src={LogoBlack} alt="logo-black" />
        </div>

        <div className={styles.containerInstitucional}>
          <p className={styles.titleIntitucional}>Precisa de Ajuda ?</p>
          <p className={styles.textInstitucional}>Sobre</p>
          <p className={styles.textInstitucional}>Politica da Loja</p>
          <p className={styles.textInstitucional}>Politica de Privacidade</p>
          <p className={styles.textInstitucional}>Contato</p>
        </div>
        <div className={styles.containerFooterMidias}>
          <p className={styles.titleMidias}>REDES SOCIAIS</p>
          <div className={styles.containerMidias}>
            <img src={Instagram} alt="instagram" />
            <img src={Facebook} alt="facebook" />
          </div>
        </div>

      </section>
      <PreFooter />
    </>
  )
}