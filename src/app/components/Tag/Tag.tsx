import { TagType } from './Tag.types'

import styles from './Tag.module.scss'

const Tag: React.FC<TagType> = ({ emoji, label }) => {
  return (
    <div className={styles.frame}>
      <span>{label}</span>
    </div>
  )
}

export default Tag
