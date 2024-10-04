import { nanoid } from 'nanoid'
import styles from './TextSection.module.scss'

interface Props {
  title: string
  paragraphs: React.ReactNode[]
}

const TextSection: React.FC<Props> = ({ title, paragraphs }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {paragraphs.map(paragraph => (
        <p key={nanoid()}>{paragraph}</p>
      ))}
    </section>
  )
}

export default TextSection
