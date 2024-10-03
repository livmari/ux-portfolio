'use client'

import { useEffect, useState } from 'react' // Import useEffect for side effects
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid' // Import the close icon
import styles from './PageHeader.module.scss'
import Link from 'next/link'

const PageHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false) // State to manage overlay visibility
  const pathname = usePathname()

  // Function to toggle the overlay
  const toggleOverlay = () => {
    setIsOpen(prev => !prev)
  }

  // Close the overlay when the pathname changes
  useEffect(() => {
    setIsOpen(false) // Close the overlay
  }, [pathname])

  return (
    <header className={styles.header}>
      <button className={styles.homeButton}>
        Hi, I'm <span className={styles.emphasis}>Liv Mari</span>
      </button>

      <button className={styles.menuButton} onClick={toggleOverlay}>
        <Bars3Icon className={styles.burgerIcon} />
      </button>

      {/* Full-page overlay */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.closeButton} onClick={toggleOverlay}>
            <XMarkIcon className={styles.closeIcon} /> {/* Close icon */}
          </div>
          <nav className={styles.navOverlay}>
            <Link
              href='/'
              className={`${styles.navLink} ${pathname === '/' ? styles.currentPage : ''}`}
              onClick={toggleOverlay} // Close overlay on link click
            >
              Projects
            </Link>
            <Link
              href='/about'
              className={`${styles.navLink} ${pathname === '/about' ? styles.currentPage : ''}`}
              onClick={toggleOverlay} // Close overlay on link click
            >
              About
            </Link>
            <a href='' className={styles.navLink} onClick={toggleOverlay}>
              Resume
            </a>
            <button className={styles.navLink} onClick={toggleOverlay}>
              Copy email
            </button>
          </nav>
        </div>
      )}

      {/* Regular navigation for larger screens */}
      <nav className={styles.nav}>
        <Link
          href='/'
          className={`${styles.navLink} ${pathname === '/' ? styles.currentPage : ''}`}>
          Projects
        </Link>
        <Link
          href='/about'
          className={`${styles.navLink} ${pathname === '/about' ? styles.currentPage : ''}`}>
          About
        </Link>
        <a href='' className={styles.navLink}>
          Resume
        </a>
        <button className={styles.navLink}>Copy email</button>
      </nav>
    </header>
  )
}

export default PageHeader
