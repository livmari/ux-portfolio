import styles from './PulseBall.module.scss'

const PulseBall: React.FC = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.pulse} />
      <div className={styles.ball} />
    </div>
  )
}

export default PulseBall
