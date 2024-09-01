import styles from './MotivationSection.module.scss'

const MotivationSection: React.FC = () => {
  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h2>Motivation</h2>

      <div className={styles.content}>
        <p>
          The Volvo Cars web design system was tailored to integrate the
          company's branding and values seamlessly into its primary e-commerce
          website. While this goal was successfully reached, given that the
          majority of the software used by Volvo is also built by Volvo, it's
          equally important to evaluate how to build usable and enjoyable
          internal tools for an entirely different set of users.
        </p>

        <p>
          The main point of contention is sizing. Business users demand more
          space for their data. This means that while large clickable areas on
          e-commerce buttons enhance accessibility for a broader range of users,
          in business software, the same horizontal padding (totaling 64 pixels
          in the case of Volvo Cars) can feel excessive and inefficient.
          Business software users often prioritize data density and quick access
          to information over the spacious, touch-friendly design required for
          consumer-facing websites.
        </p>

        <div
          className={
            'flex flex-col sm:flex-row gap-2 sm:gap-4 items-center font-medium text-lg'
          }
        >
          <button
            className={
              'h-12 px-8 bg-primary-600 text-white font-medium text-lg tracking-wider rounded-lg'
            }
          >
            Volvo Cars button size
          </button>
          vs.
          <button
            className={
              'px-3 py-1 rounded-lg bg-primary-600 text-white font-medium tracking-wider text-sm'
            }
          >
            Excel button size
          </button>
        </div>

        <div className={'grid gap-6 md:gap-8 md:grid-cols-3 md:items-center'}>
          <p className={'md:hidden'}>
            Moreover, while the combination of pure white and pure black creates
            a strong, clean contrast that aligns with the brand's minimalistic
            visual identity, applying this high-contrast scheme in a business
            system may lead to eye strain over extended periods of use.
          </p>

          <div className={'md:col-span-2'}>
            <img
              src={'/images/design_system-vcc_ui_example.avif'}
              className={'rounded-lg'}
            />
            <small>Example from the Volvo Cars design system</small>
          </div>

          <p className={'hidden md:block'}>
            Moreover, while the combination of pure white and pure black creates
            a strong, clean contrast that aligns with the brand's minimalistic
            visual identity, applying this high-contrast scheme in a business
            system may lead to eye strain over extended periods of use.
          </p>
        </div>

        <p>
          These points, along with the risk that relying on a single centralised
          platform team to provide custom Ui content for an entire organisation
          the size of Volvo may slow down business operations, highlight the
          need for locally managed solutions.
        </p>
      </div>
    </section>
  )
}

export default MotivationSection
