import styles from './StoryCard.module.scss'

interface Props {
  user: string
  activity: string
  goal: string
}

const StoryCard: React.FC<Props> = ({ user, activity, goal }) => {
  return (
    <div className={styles.card}>
      <p>
        <span className={styles.emphasis}>As a</span> {user}{' '}
        <span className={styles.emphasis}>I want to</span> {activity}{' '}
        <span className={styles.emphasis}>so that</span> {goal}
      </p>
    </div>
  )
}

export default StoryCard
