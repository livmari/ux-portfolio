'use client'

import { useState } from 'react'
import { nanoid } from 'nanoid'

import styles from './Accordion.module.scss'
import { PlusIcon } from '@heroicons/react/24/outline'

interface AccordionProps {
  sections: { title: string; content: string }[]
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  const [expandedIndex, setExpandedIndex] = useState<Number>(0) // first in the list of provided sections

  const handleCollapsibleClick = (index: Number) => {
    if (expandedIndex !== index) setExpandedIndex(index)
    else setExpandedIndex(-1)
  }

  return (
    <div className={`${styles.accordion}`}>
      {sections.map(
        (section: { title: String; content: String }, index: Number) => (
          <div className={`${styles.collapsible}`} key={nanoid()}>
            <button
              onClick={() => handleCollapsibleClick(index)}
              className={styles.header}
            >
              <span className={`${styles.label} heading-4`}>
                {section.title}
              </span>

              <PlusIcon
                className={`${index === expandedIndex && 'rotate-45'} ${
                  styles.icon
                }`}
              />
            </button>

            <div
              className={
                index === expandedIndex
                  ? styles.displayedContent
                  : styles.hiddenContent
              }
            >
              {section.content}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Accordion
