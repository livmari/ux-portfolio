import styles from './ApproachSection.module.scss'

const ApproachSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h2>Approach</h2>

      <div className={styles.content}>
        <p>
          Building on the motivation to tailor our design system for business
          software and address the unique needs of our internal users, it became
          clear that empowering our developers and designers with the right
          tools and skills was essential. The challenge was not only to create a
          set of usable, high-quality UI components but also to foster a more
          user-centered mindset among development teams. To achieve this, I
          focused on leveraging Figma as an interactive platform to engage
          developers directly in the design process.
        </p>

        <p>
          To begin, I trained junior designers to replicate components from an
          external library in Figma. This was done to develop a library of
          pixel-perfect prototyping components that would set a high standard,
          while simultaneously addressing any gaps in using the design tool.
        </p>

        <img src={'/images/figma_ui-ant_design.png'} className={'rounded-lg'} />

        <p>
          By adding to the design patterns and providing clear guidelines on how
          to apply the components within our business systems, I established a
          reference point that helped developers work independently while
          following design best practices. This not only ensured consistency
          between design and implementation but also served as a learning tool
          for the team.
        </p>

        <img src={'/images/design_system-pattern_example.svg'} />

        <p>
          I then organised whiteboarding workshops with developers, focusing on
          how to apply UI components with usability in mind. The goal was to
          empower them to adapt these components for various use cases, rather
          than relying on a one-size-fits-all approach. By stepping away from
          the idea of using the same component everywhere just because it's
          available, we encouraged a more thoughtful application that
          prioritises usability. This collaborative approach helped developers
          become more engaged with the user experience, ultimately raising the
          overall standard of UI across the board.
        </p>
      </div>
    </section>
  )
}

export default ApproachSection
