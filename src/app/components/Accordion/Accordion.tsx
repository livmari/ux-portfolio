import { nanoid } from 'nanoid'

import { Collapsible } from '@/components/*'
import type { CollapsibleType } from '@/components/*'

interface AccordionProps {
  sections: CollapsibleType[]
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  return (
    <div>
      {sections.map(section => (
        <Collapsible
          title={section.title}
          content={section.content}
          isExpanded={section.isExpanded}
          key={nanoid()}
        />
      ))}
    </div>
  )
}

export default Accordion
