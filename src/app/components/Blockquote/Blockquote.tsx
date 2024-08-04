import { type BlockquoteType } from '@/components'

import styles from './Blockquote.module.scss'

const Blockquote: React.FC<BlockquoteType> = ({ quote, name, profession }) => {
  return (
    <blockquote className={`${styles.frame}`}>
      <cite>
        <span className={`${styles.name}`}>{name}</span>

        <br />

        {profession && (
          <span className={`${styles.profession}`}>{profession}</span>
        )}
      </cite>

      <q>{quote}</q>
    </blockquote>
  )
}

export default Blockquote
