'use client'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

import type { CollapsibleType } from '@/components/*'

import styles from './Collapsible.module.scss'

const Collapsible: React.FC<CollapsibleType> = ({
  title,
  content,
  isExpanded,
}) => {
  const [showContent, setShowContent] = useState(isExpanded)

  return (
    <div
      className={`${styles.wrapper} ${showContent ? styles.isExpanded : ''}`}
    >
      <button
        className={`heading-4 ${styles.header}`}
        onClick={() => setShowContent(!showContent)}
      >
        {title}

        <PlusIcon className={`${styles.toggleIcon}`} />
      </button>

      <div className={`${styles.content}`}>{content}</div>
    </div>
  )
}

export default Collapsible
