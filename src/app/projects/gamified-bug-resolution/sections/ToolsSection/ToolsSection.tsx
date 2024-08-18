import { nanoid } from 'nanoid'

import { ToolCard } from '@/components'

import styles from './ToolsSection.module.scss'

interface ToolsSectionProps {
  tools?: { illustration: React.ReactNode; link?: string }[]
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ tools }) => {
  return (
    <section className={'layout-section p-section'}>
      <h2>Tools</h2>

      {tools && (
        <div className={styles.toolsFrame}>
          {tools?.map(tool => (
            <ToolCard
              illustration={tool.illustration}
              link={tool.link}
              key={nanoid()}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ToolsSection
