import { nanoid } from 'nanoid'

import { Description } from '@/projects/components'

import styles from './HeroSection.module.scss'
import Image from 'next/image'

interface HeroSectionProps {
  title?: string
  descriptors?: { label: string; value: string }[] | []
  bannerImage?: { path: string; alt: string }
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = '',
  descriptors = [],
  bannerImage,
}) => {
  let colorStyles = [
    styles.red,
    styles.orange,
    styles.amber,
    styles.yellow,
    styles.lime,
    styles.green,
    styles.emerald,
    styles.teal,
    styles.cyan,
    styles.sky,
    styles.blue,
    styles.indigo,
    styles.violet,
    styles.purple,
    styles.fuchsia,
    styles.pink,
    styles.rose,
  ]

  let titleSymbols = title.split('')

  const symbolColors = titleSymbols.map(
    (_, index) => colorStyles[index % colorStyles.length]
  )

  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>
        {titleSymbols.map((symbol, index) => (
          <span
            className={symbol !== ' ' ? symbolColors[index] : ''}
            key={nanoid()}
          >
            {symbol}
          </span>
        ))}
      </h1>

      {descriptors?.length !== 0 ? (
        <div className={styles.descriptors}>
          {descriptors.map(description => (
            <Description label={description.label} value={description.value} />
          ))}
        </div>
      ) : undefined}

      {bannerImage && (
        <Image
          src={bannerImage.path}
          alt={bannerImage.alt}
          height={1600}
          width={1600}
          className={styles.image}
        />
      )}
    </section>
  )
}

export default HeroSection
