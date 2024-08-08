import { nanoid } from 'nanoid'

import { Collapse } from '@/components'

import styles from './Accordion.module.scss'

interface AccordionProps {
  sections: { title: string; content: string | React.ReactNode }[]
  expandFirst?: boolean
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  expandFirst = true,
}) => {
  return (
    <div>
      {sections.map((section, index) => (
        <Collapse
          title={section.title}
          content={section.content}
          key={nanoid()}
          collapsed={expandFirst && index !== 0}
        />
      ))}
    </div>
  )
}

export default Accordion
