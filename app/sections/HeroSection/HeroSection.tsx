import { nanoid } from 'nanoid'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
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
}

export default HeroSection
