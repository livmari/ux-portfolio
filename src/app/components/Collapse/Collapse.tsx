'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import styles from './Collapse.module.scss'

type CollapseProps = {
  title: string
  content: string | React.ReactNode
  collapsed?: boolean
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  content,
  collapsed = true,
}) => {
  const [showContent, setShowContent] = useState<boolean | undefined>(collapsed)

  const toggleVisibility = () => setShowContent(!showContent)

  return (
    <div className={`${styles.frame} ${showContent && styles.collapsed}`}>
      <button
        onClick={() => toggleVisibility()}
        className={`${styles.visibilityToggle} ${
          showContent && styles.collapsed
        }`}
      >
        <h2>{title}</h2>

        <XMarkIcon />
      </button>

      <div className={`${styles.content} ${showContent && styles.collapsed}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse
