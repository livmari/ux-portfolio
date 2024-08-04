'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  CheckIcon,
  DocumentDuplicateIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline'

import { myEmail } from '@/lib/meta'

import styles from './PageHeader.module.scss'
import Link from 'next/link'

const PageHeader: React.FC = () => {
  const pathname = usePathname()

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
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [emailCopied])

  return (
    <header className={`p-section ${styles.frame}`}>
      {pathname === '/' ? (
        <div className={styles.externalLinksFrame}>
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

          <button
            className={styles.button}
            onClick={() => copyEmailToClipboard()}
          >
            {emailCopied ? 'Copied!' : 'Email'}

            {emailCopied ? (
              <CheckIcon className={styles.icon} />
            ) : (
              <DocumentDuplicateIcon className={styles.icon} />
            )}
          </button>
        </div>
      ) : (
        <Link href={'/'} className={styles.homeLink}>
          Go back <ArrowUturnLeftIcon />
        </Link>
      )}
    </header>
  )
}

export default PageHeader
