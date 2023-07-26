import Logo from '../../assets/svg/logo-serie.svg'
import Lupa from '../../assets/svg/search.svg'
import User from '../../assets/svg/user.svg'
import Icon from '../../assets/svg/icon.svg'
import Shop from '../../assets/svg/shop.svg'
import styles from './Header.module.css'
import { PreHeader } from '../PreHeader/PreHeader'
export function Header() {
  return (
    <>
    <div className={styles.headerContainer} >
      <header className={styles.header}>
      <section className={styles.headerLogo}>
        <img src={Logo} alt="logo" />
      </section>
      <nav className={styles.headerMenu}>
        <ul className={styles.listMenu}>
          <li className={styles.itemMenu}><a>SHOP</a></li>
          <li className={styles.itemMenu}><a>LANÇAMENTOS</a></li>
          <li className={styles.itemMenu}><a>BORN IN CHAOS</a></li>
        </ul>
      </nav>
      <div className={styles.headerSearch}>
        <content className={styles.contentSearch}>
          <img src={Lupa} alt="lupa" />
          <input type="text" placeholder="BUSCAR PRODUTO..."
          />
        </content>
      </div>
      <div className={styles.headerUser}>
        <img src={User} alt="" />
      </div>
      <div className={styles.headerCart}>
        <img  className={styles.iconBag}src={Shop} alt="" />
        <img src={Icon} alt="" />
      </div>
      </header>
    </div>
      <PreHeader/>
    </>
  )
}