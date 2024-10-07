import styles from './ImageSection.module.scss'

interface Props {
  path: string
  alt?: string
}

const ImageSection: React.FC<Props> = ({ path, alt = '' }) => (
  <section className={styles.section}>
    <img src={path} alt={alt} className={styles.image} />
  </section>
)

export default ImageSection
