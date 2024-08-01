import { Tag, type TagType } from '@/components/index'

import styles from './TagGroup.module.scss'

interface TagGroupProps {
  tags: TagType[]
}

const TagGroup: React.FC<TagGroupProps> = ({ tags }) => {
  return (
    <div className={styles.frame}>
      {tags.map(tag => (
        <Tag emoji={tag.emoji} label={tag.label} />
      ))}
    </div>
  )
}

export default TagGroup
