'use client'

import { useState, useEffect } from 'react'
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

import { myEmail } from '@/lib/meta'

import styles from './PageHeader.module.scss'

const PageHeader: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(myEmail)
      setEmailCopied(true)
    } catch (err) {
      console.error('Failed to copy text to clipboard')
      setEmailCopied(false)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (emailCopied) {
      timer = setTimeout(() => {
        setEmailCopied(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [emailCopied])

  return (
    <header className={`p-section ${styles.frame}`}>
      <button className={styles.button} onClick={() => copyEmailToClipboard()}>
        {emailCopied ? (
          <CheckIcon className={styles.icon} />
        ) : (
          <DocumentDuplicateIcon className={styles.icon} />
        )}
        Email
      </button>

      <button
        className={styles.button}
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/livmari/',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        LinkedIn
      </button>

      <button
        className={styles.button}
        onClick={() =>
          window.open(
            'https://dribbble.com/livmari',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        Dribbble
      </button>

      <button
        className={styles.button}
        onClick={() =>
          window.open(
            'https://www.figma.com/@livmari',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        Figma
      </button>

      {/*  <Button
        icon={emailCopied ? <CheckIcon /> : <DocumentDuplicateIcon />}
        label={'Email'}
        onClick={() => copyEmailToClipboard()}
      />

      <Button icon={<ArrowTopRightOnSquareIcon />} label={'Dribbble'} />

      <Button icon={<ArrowTopRightOnSquareIcon />} label={'Figma'} /> */}
    </header>
  )
}

export default PageHeader
