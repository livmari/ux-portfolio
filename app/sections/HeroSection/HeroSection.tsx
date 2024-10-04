import { nanoid } from 'nanoid'

import { Description } from '@/app/components'

import styles from './HeroSection.module.scss'

interface Props {
  title: string
  useCase?: 'home' | 'project'
  image?: { path: string; alt: string }
  year?: string
  company?: string
  descriptions?: { label: string; value?: string; values?: string[] }[]
}

const HeroSection: React.FC<Props> = ({
  title = '',
  useCase = 'home',
  image,
  year,
  company,
  descriptions,
}) => {
  let colorStyles = [
    styles.blue,
    styles.green,
    styles.orange,
    styles.pink,
    styles.yellow,
  ]

  let firstRow = `I design digital experiences `
  let secondRow = `that bring joy and empower users`

  let firstLetters = firstRow.split('')
  let secondLetters = secondRow.split('')

  const firstRowColors = firstLetters.map(
    (_, index) => colorStyles[index % colorStyles.length],
  )
  const secondRowColors = secondLetters.map(
    (_, index) => colorStyles[index % colorStyles.length],
  )

  const titleLetters = title.split('')
  const rainbowTitle = titleLetters.map(
    (_, index) => colorStyles[index % colorStyles.length],
  )

  if (useCase === 'home')
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>
          {firstLetters.map((symbol, index) => (
            <span
              className={`${symbol !== ' ' ? styles.symbol : ''} ${
                symbol !== ' ' ? firstRowColors[index] : ''
              }`}
              key={nanoid()}>
              {symbol}
            </span>
          ))}

          <br className={'hidden sm:block'} />

          {secondLetters.map((symbol, index) => (
            <span
              className={symbol !== ' ' ? secondRowColors[index] : ''}
              key={nanoid()}>
              {symbol}
            </span>
          ))}
        </h1>
      </section>
    )
  else if (useCase === 'project' && title)
    return (
      <section
        className={`${styles.section} container mx-auto max-w-screen-2xl`}>
        <div>
          {year && company && (
            <p className={'callout'}>
              {company}, {year}
            </p>
          )}
          <h1 className={styles.projectTitle}>
            {titleLetters.map((symbol, index) => (
              <span
                className={symbol !== ' ' ? rainbowTitle[index] : ''}
                key={nanoid()}>
                {symbol}
              </span>
            ))}
          </h1>
        </div>

        {image && (
          <img src={image.path} alt={image.alt} className={styles.image} />
        )}

        <div>
          {descriptions &&
            descriptions.map(
              (description: {
                label: string
                value?: string
                values?: string[]
              }) => (
                <Description
                  label={description.label}
                  value={description.value}
                  values={description.values}
                  key={nanoid()}
                  style={'tags'}
                />
              ),
            )}
        </div>
      </section>
    )
}

export default HeroSection
