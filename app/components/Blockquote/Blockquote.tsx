import {
  ChatBubbleLeftRightIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  HeartIcon,
} from '@heroicons/react/24/solid'

import styles from './Blockquote.module.scss'

interface Props {
  quote: string
  cite?: string
  className?: string
  isPageSection?: boolean
  showIcon?: boolean
}

const Blockquote: React.FC<Props> = ({
  quote,
  cite,
  className = '',
  isPageSection = false,
  showIcon = true,
}) => {
  return (
    <blockquote
      className={`${styles.quoteContainer} ${isPageSection && 'page-section'} ${className}`}>
      {showIcon && <ChatBubbleLeftRightIcon className={styles.icon} />}

      <div>
        <q className={styles.quote}>{quote}</q>

        <cite className={styles.cite}>- {cite}</cite>
      </div>
    </blockquote>
  )
}

export default Blockquote
