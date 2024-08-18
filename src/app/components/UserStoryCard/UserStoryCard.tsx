import styles from './UserStoryCard.module.scss'

interface UserStoryCardProps {
  story: { user: string; activity: string; goal: string }
}

const UserStoryCard: React.FC<UserStoryCardProps> = ({ story }) => {
  return (
    <div className={styles.frame}>
      <p>
        <span>As a</span> {story.user}
      </p>

      <p>
        <span>I want to</span> {story.activity}
      </p>

      <p>
        <span>so that</span> {story.goal}
      </p>
    </div>
  )
}

export default UserStoryCard
