import { nanoid } from 'nanoid'

import { ToolCard } from '@/components'
import {
  AntDesignLogo,
  FigmaLogo,
  NotionLogo,
} from '@/app/components/illustrations'

import styles from './ToolsSection.module.scss'

const ToolsSection: React.FC = () => {
  const tools = [
    { illustration: <FigmaLogo />, link: 'https://www.figma.com/' },
    { illustration: <AntDesignLogo />, link: 'https://ant.design/' },
  ]

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
