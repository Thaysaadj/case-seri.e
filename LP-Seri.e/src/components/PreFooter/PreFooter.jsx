import Fbits from '../../assets/images/logo-fbits-branco.png'
import Serie from '../../assets/images/logo-seri.e.png'
import styles from './PreFooter.module.css'

export function PreFooter() {
  return (
    <section className={styles.sectionPreFooter}>
      <div className={styles.containerLogosPreFooter}>
        <img src={Fbits} alt="logo-fbits" />
        <img src={Serie} alt="logo-serie" />
      </div>
      <div className={styles.containerDireitosReservados}>
        <p>
          @2023 Todos os direitos reservados
        </p>
      </div>
    </section>
  )
}