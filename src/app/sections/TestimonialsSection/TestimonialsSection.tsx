'use client'

import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Blockquote, type BlockquoteType } from '@/components'
import { testimonials } from '@/lib/testimonials'
import { SCREEN_SM, SCREEN_LG } from '@/lib/screens'

import styles from './TestimonialsSection.module.scss'

const TestimonialsSection: React.FC = () => {
  const isSmallestViewport = useMediaQuery({
    query: `max-width: ${SCREEN_SM - 1}px`,
  })
  const isSmallViewport = useMediaQuery({
    query: `min-width: ${SCREEN_SM}px, max-width: ${SCREEN_LG - 1}px`,
  })
  const isLargeViewport = useMediaQuery({ query: `min-width: ${SCREEN_SM}px` })

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setViewportWidth(window.innerWidth))

    return () =>
      window.removeEventListener('resize', () =>
        setViewportWidth(window.innerWidth)
      )
  }, [])

  const testimonialsLength = testimonials.length

  // Testimonials array split two ways
  const middle = Math.floor(testimonialsLength / 2) + 1
  const firstSmallViewportTestimonialsList = testimonials.slice(0, middle)
  const secondSmallViewportTestimonialsList = testimonials.slice(middle)

  // Testimonials array split three ways
  const largeViewportTestimonialsListSize = Math.floor(testimonialsLength / 3)
  const remainder = testimonialsLength % 3

  const largeViewportTestimonialsLists = []
  let startIndex = 0

  for (let i = 0; i < 3; i++) {
    let currentListSize = largeViewportTestimonialsListSize
    if (i < remainder) currentListSize++

    const endIndex = startIndex + currentListSize
    largeViewportTestimonialsLists.push(
      testimonials.slice(startIndex, endIndex)
    )
    startIndex = endIndex
  }

  return (
    <section className={`p-section layout-section`}>
      {isSmallestViewport && (
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
      {viewportWidth >= SCREEN_SM && viewportWidth < SCREEN_LG && (
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

      {viewportWidth >= SCREEN_LG && (
        <div className={styles.mosaic}>
          {largeViewportTestimonialsLists.map(testimonialList => (
            <div className={styles.col} key={nanoid()}>
              {testimonialList.map((testimonial: BlockquoteType) => (
                <Blockquote
                  quote={testimonial.quote}
                  name={testimonial.name}
                  profession={testimonial.profession}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default TestimonialsSection
