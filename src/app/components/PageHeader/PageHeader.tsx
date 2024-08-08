'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  ArrowUturnLeftIcon,
  CheckIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

import { myEmail } from '@/lib/meta'
import { Button } from '@/components'
import { SparkleToSnowflake } from '@/components/animations'

import styles from './PageHeader.module.scss'

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
      <Link href={'/'} className={styles.homeLink}>
        <SparkleToSnowflake />
      </Link>

      <Button
        label={emailCopied ? 'Copied!' : 'Copy email'}
        variant={'link'}
        iconPosition={'right'}
        icon={emailCopied ? <CheckIcon /> : <DocumentDuplicateIcon />}
        onClick={() => copyEmailToClipboard()}
      />
    </header>
  )
}

export default PageHeader
