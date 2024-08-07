import styles from './Badge.module.scss'

interface BadgeProps {
  text: string
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.illustration}>
        <div className={styles.pulse} />
        <div className={styles.ball} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Badge
