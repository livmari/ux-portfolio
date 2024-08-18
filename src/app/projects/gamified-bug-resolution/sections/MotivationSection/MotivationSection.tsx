import styles from './MotivationSection.module.scss'

interface MotivationSectionProps {
  content?: string | React.ReactNode
}

const MotivationSection: React.FC<MotivationSectionProps> = ({ content }) => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h2>Motivation</h2>

      <p>
        This project took place during a quarterly 2-day innovation sprint,
        inspired by managements requests for my development team to give
        estimations on issue resolution turnover time. Since a combination of
        factors, ranging from complexity and severity of the bugs, to delays in
        user responses, made it difficult for the team to give a real
        estimation, I designed a mock-up to improve cross-team relationships and
        restore developers' sense of agency and joy in their work.
      </p>
    </section>
  )
}

export default MotivationSection
