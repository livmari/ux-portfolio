import { nanoid } from 'nanoid'

import { StoryCard } from '@/app/components'

import styles from './UserStoriesSection.module.scss'

interface Props {
  stories: { user: string; activity: string; goal: string }[]
}

const UserStoriesSection: React.FC<Props> = ({ stories }) => {
  return (
    <section className={styles.section}>
      {stories.map(story => (
        <StoryCard
          user={story.user}
          activity={story.activity}
          goal={story.goal}
          key={nanoid()}
        />
      ))}
    </section>
  )
}

export default UserStoriesSection
