import styles from './MotivationSection.module.scss'

interface MotivationSectionProps {
  content?: string | React.ReactNode
}

const MotivationSection: React.FC<MotivationSectionProps> = ({ content }) => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h2>Motivation</h2>

      {content}
    </section>
  )
}

export default MotivationSection
