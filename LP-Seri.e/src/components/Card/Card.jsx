import ImageOrigin from '../../assets/images/image-shelf-origin.png'
import styles from './Card.module.css'

export function Card({img, name, oldPrice, selingPrice}) {

  return (
    <div className={styles.sectionCard}>
      <div className={styles.infoCard}>
        <div className={styles.imageCard}>
          <img src={img} alt="" />
        </div>
        <div className={styles.containerText}>
          <div className={styles.nameProduct}>
            <p>{name}</p>
          </div>
          <div className={styles.oldPrice}>
            <p>{oldPrice}</p>
          </div>
          <div className={styles.newPrice}>
            <p>{selingPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}