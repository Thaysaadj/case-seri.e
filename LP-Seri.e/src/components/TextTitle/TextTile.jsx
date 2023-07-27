import styles from './TextTitle.module.css'

export function TextTitle ({text}) {

  return(
    <section className={styles.sectionTitle}>
      <div className={styles.contentTile}>
        <p className={styles.title}>{text}</p>
      </div>
    </section>
  )
}