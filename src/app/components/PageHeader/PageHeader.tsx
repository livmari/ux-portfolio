'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  CheckIcon,
  DocumentDuplicateIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

import { myEmail } from '@/lib/meta'
import { Button } from '@/components'

import styles from './PageHeader.module.scss'
import { SparkleToSnowflake } from '@/components/animations'

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
      <SparkleToSnowflake />

      {/* <Button
        className={styles.button}
        onClick={() => copyEmailToClipboard()}
        label={emailCopied ? 'Copied!' : ' Copy email'}
        icon={
          emailCopied ? (
            <CheckIcon className={styles.icon} />
          ) : (
            <DocumentDuplicateIcon className={styles.icon} />
          )
        }
        iconPosition={'right'}
        variant={'primary'}
      /> */}

      {pathname !== '/' && (
        <Link href={'/'} className={styles.homeLink}>
          Go back <ArrowUturnLeftIcon />
        </Link>
      )}
    </header>
  )
}

export default PageHeader
