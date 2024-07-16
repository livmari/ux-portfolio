import styles from './Description.module.scss'

interface DescriptionProps {
  label: string
  value: string
  orientation: 'row' | 'col'
}

const Description: React.FC<DescriptionProps> = ({
  orientation = 'col',
  label,
  value,
}) => {
  return (
    <div
      className={`${styles.layout} ${
        orientation === 'col' ? styles.column : styles.row
      }`}
    >
      <p>
        {label}
        {orientation === 'row' && ':'}
      </p>
      <p>{value}</p>
    </div>
  )
}

export default Description
