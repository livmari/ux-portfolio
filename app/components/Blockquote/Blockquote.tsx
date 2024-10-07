import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

import styles from './Blockquote.module.scss'

interface Props {
  quote: string
  cite?: string
  className?: string
  isPageSection?: boolean
}

const Blockquote: React.FC<Props> = ({
  quote,
  cite,
  className = '',
  isPageSection = false,
}) => {
  return (
    <blockquote
      className={`${styles.quoteContainer} ${isPageSection && 'page-section'} ${className}`}>
      <ChatBubbleLeftRightIcon className={styles.icon} />
      <div>
        <q className={styles.quote}>{quote}</q>
        <cite className={styles.cite}>- {cite}</cite>
      </div>
    </blockquote>
  )
}

export default Blockquote
