import { type BlockquoteType } from '@/components'

import styles from './Blockquote.module.scss'

const Blockquote: React.FC<BlockquoteType> = ({ quote, name, profession }) => {
  return (
    <blockquote className={`${styles.frame}`}>
      <cite>
        <span className={`${styles.name}`}>{name}</span>

        <br />

        {profession && (
          <small className={`${styles.profession}`}>{profession}</small>
        )}
      </cite>

      <q>{quote}</q>
    </blockquote>
  )
}

export default Blockquote
