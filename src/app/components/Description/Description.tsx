interface DescriptionProps {
  label: string
  value: string | React.ReactNode
  orientation?: 'col' | 'row'
}

import styles from './Description.module.scss'

const Description: React.FC<DescriptionProps> = ({
  label,
  value,
  orientation = 'col',
}) => {
  return (
    <div
      className={`${styles.frame} ${
        orientation === 'col' ? styles.col : styles.row
      }`}
    >
      <label>{label}:</label>

      {typeof value === 'string' ? <p>{value}</p> : value}
    </div>
  )
}

export default Description
