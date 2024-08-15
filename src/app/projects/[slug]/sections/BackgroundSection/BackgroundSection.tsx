interface BackgroundSectionProps {
  content?: string | React.ReactNode
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ content }) => {
  return (
    <section className={'layout-section p-section'}>
      <h2>Background</h2>

      {content}
    </section>
  )
}

export default BackgroundSection
