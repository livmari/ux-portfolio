import styles from './Divider.module.scss'

const Divider: React.FC = () => {
  return (
    <div className={'layout-section p-section'}>
      <div className={styles.divider} />
    </div>
  )
}

export default Divider
