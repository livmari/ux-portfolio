'use client'

import { useState } from 'react'
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid'

import styles from './CardQuote.module.scss'

interface Props {
  quote: string
  cite?: string
}

const CardQuote: React.FC<Props> = ({ quote, cite }) => {
  const [expanded, expand] = useState<boolean>(false)

  return (
    <blockquote className={`${styles.card} ${expanded ? 'h-content' : 'h-80'}`}>
      <q>{quote}</q>

      <cite>{cite}</cite>

      <footer className={styles.footer}>
        <button onClick={() => expand(!expanded)} className={styles.button}>
          {expanded ? (
            <ArrowsPointingInIcon className={styles.buttonIcon} />
          ) : (
            <ArrowsPointingOutIcon className={styles.buttonIcon} />
          )}
        </button>
      </footer>
    </blockquote>
  )
}

export default CardQuote
