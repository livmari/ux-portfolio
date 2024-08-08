import { ArrowDownIcon } from '@heroicons/react/24/outline'

import styles from './Divider.module.scss'

interface DividerProps {
  text?: string
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className={`layout-section p-section ${styles.frame}`}>
      <div className={styles.divider} />

      {text && (
        <header className={styles.header}>
          <small>{text}</small>

          <ArrowDownIcon />
        </header>
      )}
    </div>
  )
}

export default Divider
