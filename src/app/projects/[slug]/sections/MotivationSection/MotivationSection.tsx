interface MotivationSectionProps {
  content?: string | React.ReactNode
}

const MotivationSection: React.FC<MotivationSectionProps> = ({ content }) => {
  return (
    <section className={'layout-section p-section'}>
      <h2>Motivation</h2>

      {content}
    </section>
  )
}

export default MotivationSection
