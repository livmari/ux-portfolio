import styles from './Card.module.scss'

interface CardProps {
  company: string
  year: string
  title: string
}

const Card: React.FC<CardProps> = ({ company, year, title }) => (
  <button className={styles.frame}>
    <div className={styles.descriptors}>
      <small>
        {company}, {year}
      </small>

      <h4 className={`heading-4 ${styles.heading}`}>{title}</h4>
    </div>

    <div className={styles.previewFrame}>
      <div className={styles.preview}>1</div>
      <div className={styles.preview}>2</div>
      <div className={styles.preview}>3</div>
    </div>
  </button>
)

export default Card
