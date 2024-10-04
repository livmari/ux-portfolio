import styles from './Tag.module.scss'

interface Props {
  label: string
}

const Tag: React.FC<Props> = ({ label }) => {
  return <div className={styles.tag}>{label}</div>
}

export default Tag
