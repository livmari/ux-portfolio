import { nanoid } from 'nanoid'

import { Tag } from '@/app/components'

import styles from './Description.module.scss'

interface Props {
  label: string
  value?: string
  values?: string[]
  style?: 'list' | 'tags'
}

const Description: React.FC<Props> = ({ label, value, values, style }) => {
  return (
    <div
      className={`${styles.description} ${style === 'tags' ? styles.row : styles.col}`}>
      <label className={styles.label}>{label}:</label>

      {value && <p>{value}</p>}

      {values && style === 'list' && (
        <ul>
          {values.map(value => (
            <li key={nanoid()}>{value}</li>
          ))}
        </ul>
      )}

      {values &&
        style === 'tags' &&
        values.map(value => <Tag label={value} key={nanoid()} />)}
    </div>
  )
}

export default Description
