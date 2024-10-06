import styles from './VectorSection.module.scss'

interface Props {
  svg: React.ReactNode
  width?: 'fill' | 'hug'
}

const VectorSection: React.FC<Props> = ({ svg, width = 'fill' }) => {
  return <section className={styles.section}>{svg}</section>
}

export default VectorSection
