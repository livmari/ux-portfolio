import styles from './Card.module.scss'

interface CardProps {
  company: string
  year: string
  title: string
}

const Card: React.FC<CardProps> = ({ company, year, title }) => (
  <button className={styles.frame}>
    <div className={styles.descriptors}>
      <header>
        <span>{company}</span>
        <span>{year}</span>
      </header>
      <h4 className={'heading-4 my-2'}>{title}</h4>
    </div>

    <div className={styles.uiSnaps}>
      <div className={styles.snap} />
      <div className={styles.snap} />
      <div className={styles.snap} />
    </div>
  </button>
)

export default Card
