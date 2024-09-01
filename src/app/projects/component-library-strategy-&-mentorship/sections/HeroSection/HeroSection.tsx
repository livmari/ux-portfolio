import { nanoid } from 'nanoid'

import { Description } from '@/components'

import styles from './HeroSection.module.scss'
import Image from 'next/image'

const HeroSection: React.FC = ({}) => {
  const descriptors = [
    { label: 'Areas', value: 'Strategy, Ui design, education' },
    { label: 'Company', value: 'Volvo Cars' },
    { label: 'Role', value: 'Designer & mentor' },
  ]

  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>
        Component library strategy
        <br />& mentorship
      </h1>

      <p>To do</p>

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
        src={'/images/component_overview.svg'}
        alt={''}
        height={1600}
        width={1600}
        className={styles.image}
      />
    </section>
  )
}

export default HeroSection
