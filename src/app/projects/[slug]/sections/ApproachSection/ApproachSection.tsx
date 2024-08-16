interface ApproachSectionProps {
  content?: React.ReactNode | string
}

const ApproachSection: React.FC<ApproachSectionProps> = ({ content }) => {
  return (
    <section className={'layout-section p-section'}>
      <h2>Approach</h2>

      {content}
    </section>
  )
}

export default ApproachSection
