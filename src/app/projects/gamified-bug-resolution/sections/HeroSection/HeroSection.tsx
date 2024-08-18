import { nanoid } from 'nanoid'

import { Description } from '@/components'

import styles from './HeroSection.module.scss'
import Image from 'next/image'

const HeroSection: React.FC = ({}) => {
  const descriptors = [
    { label: 'Areas', value: 'Design sprint, Ui design' },
    { label: 'Company', value: 'Volvo Cars' },
    { label: 'Role', value: 'UX designer' },
  ]

  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>Gamified bug resolution</h1>

      <p>
        Opening up for transparent communication about issue resolution across
        teams while encouraging gamification and a sense of success for
        developers
      </p>

      <div className={styles.descriptors}>
        {descriptors.map(description => (
          <Description
            label={description.label}
            value={description.value}
            key={nanoid()}
          />
        ))}
      </div>

      <Image
        src={'/images/system_health-bug_resolution_overview.svg'}
        alt={''}
        height={1600}
        width={1600}
        className={styles.image}
      />
    </section>
  )
}

export default HeroSection
