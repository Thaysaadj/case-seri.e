import { useState } from "react"
import { Card } from "../Card/Card"
import ImageOrigin from '../../assets/images/image-shelf-origin.png'
import styles from './Shelf.module.css'
import ChevronLeft from '../../assets/svg/chevron-left.svg'
import ChevronRight from '../../assets/svg/chevron-right.svg'
import { TextTitle } from "../TextTitle/TextTile"

export function Shelf() {
  const [items, setItems] = useState([
    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: true
    },

    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: true
    },

    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: true
    },

    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: false
    },

    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: true
    },

    {
      name: "Lorem Ipsum",
      oldPrice: 12999,
      selingPrice: 10999,
      img: ImageOrigin,
      availability: true
    }
  ])
  console.log("item", items[0])

  return (
    <>
      <TextTitle
        text="DESTAQUES"
      />
      <div className={styles.contentArrow}>
        <div className={styles.arrowLeft}>
          <img src={ChevronLeft} alt="" />
        </div>
        <div className={styles.arrowRight}>
          <img src={ChevronRight} alt="" />
        </div>
      </div>
      <div className={`${styles.containerShelf} ${items[0].availability ? "" : styles.available}`}>
        <div className={styles.shelf}>
          {
            items.map((item) => {
              return (
                <Card
                  name={item.name}
                  oldPrice={item.oldPrice}
                  selingPrice={item.selingPrice}
                  img={item.img}
                  availability={item.availability}

                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}