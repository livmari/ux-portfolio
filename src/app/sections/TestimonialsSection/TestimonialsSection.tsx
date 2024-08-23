'use client'

import { nanoid } from 'nanoid'
import { useMediaQuery } from 'react-responsive'

import { Blockquote, type BlockquoteType } from '@/components'
import { testimonials } from '@/lib/testimonials'
import { SCREEN_LG } from '@/lib/screens'

import styles from './TestimonialsSection.module.scss'

const TestimonialsSection: React.FC = () => {
  const isNotLargeViewport = useMediaQuery({ maxWidth: SCREEN_LG - 1 })
  const isLargeViewport = useMediaQuery({
    minWidth: SCREEN_LG,
  })

  // Testimonials array split two ways
  const middle = Math.floor(testimonials.length / 2) /* + 1 */
  const firstSmallViewportTestimonialsList = testimonials.slice(0, middle)
  const secondSmallViewportTestimonialsList = testimonials.slice(middle)

  return (
    <section className={`p-section layout-section`} id={'kind-words'}>
      {isNotLargeViewport && (
        <div className={styles.mosaic}>
          {testimonials.map((testimonial: BlockquoteType) => (
            <Blockquote
              quote={testimonial.quote}
              name={testimonial.name}
              profession={testimonial.profession}
              key={nanoid()}
            />
          ))}
        </div>
      )}

      {isLargeViewport && (
        <div className={styles.mosaic}>
          <div className={styles.col}>
            {firstSmallViewportTestimonialsList.map(
              (testimonial: BlockquoteType) => (
                <Blockquote
                  quote={testimonial.quote}
                  name={testimonial.name}
                  profession={testimonial.profession}
                  key={nanoid()}
                />
              )
            )}
          </div>

          <div className={styles.col}>
            {secondSmallViewportTestimonialsList.map(
              (testimonial: BlockquoteType) => (
                <Blockquote
                  quote={testimonial.quote}
                  name={testimonial.name}
                  profession={testimonial.profession}
                  key={nanoid()}
                />
              )
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default TestimonialsSection
