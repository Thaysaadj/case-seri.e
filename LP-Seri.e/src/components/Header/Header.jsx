import Logo from '../../assets/svg/logo-serie.svg'
import Lupa from '../../assets/svg/search.svg'
import User from '../../assets/svg/user.svg'
import Icon from '../../assets/svg/icon.svg'
import Shop from '../../assets/svg/shop.svg'
import styles from './Header.module.css'
import { PreHeader } from '../PreHeader/PreHeader'
import MenuBurg from '../../assets/svg/burger-menu.svg'

export function Header() {

  const isMax768px = window.innerWidth <= 768;

  const exampleTernary = isMax768px ? 'Estou em 768px ou menos' : 'Estou acima de 768px';

  return (
    <>
      <PreHeader />

      <div className={styles.headerContainer} >
        <header className={styles.header}>
          <section className={styles.headerLogo}>
            <img src={Logo} alt="logo" />
          </section>
          {isMax768px ?
            <div className={styles.containerMenuBurg}>
              <img src={MenuBurg} alt="" />
            </div>
            :
            <>
              <nav className={styles.headerMenu}>
                <ul className={styles.listMenu}>
                  <li className={styles.itemMenu}><a>SHOP</a></li>
                  <li className={styles.itemMenu}><a>LANÇAMENTOS</a></li>
                  <li className={styles.itemMenu}><a>BORN IN CHAOS</a></li>
                </ul>
              </nav>
              <div className={styles.headerSearch}>
                <div className={styles.contentSearch}>
                  <img src={Lupa} alt="lupa" />
                  <input type="text" placeholder="BUSCAR PRODUTO..."
                  />
                </div>
              </div>
              <div className={styles.headerUser}>
                <img src={User} alt="" />
              </div>
              <div className={styles.headerCart}>
                <img className={styles.iconBag} src={Shop} alt="" />
                <img src={Icon} alt="" />
              </div>
            </>
          }
        </header>
      </div>
    </>
  )
}