import ImageOrigin from '../../assets/images/image-shelf-origin.png'
import SoldOut from '../../assets/images/soldOut.png'
import styles from './Card.module.css'

export function Card({ img, name, oldPrice, selingPrice, availability }) {

  function formatePrice(price){
    const formattedPrice = price.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    return formattedPrice
  }


  return (
    <div className={`${styles.sectionCard} ${availability ? "" : styles.available}`}>
      <div className={styles.infoCard}>
        <div className={styles.imageCard}>
          <img src={img} alt="" />
          {availability ?
            <></>
            :
            <div className={styles.soldOut}>
              <img src={SoldOut} alt="" />
            </div>
          }
        </div>
        <div className={styles.containerText}>
          <div className={styles.nameProduct}>
            <p>{name}</p>
          </div>
          <div className={styles.oldPrice}>
            <p>{formatePrice(oldPrice)}</p>
          </div>
          <div className={styles.newPrice}>
            <p>{formatePrice(selingPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}