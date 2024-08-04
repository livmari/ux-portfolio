import { nanoid } from 'nanoid'

import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  let colorStyles = [
    styles.red,
    styles.orange,
    styles.amber,
    styles.yellow,
    styles.lime,
    styles.green,
    styles.emerald,
    styles.teal,
    styles.cyan,
    styles.sky,
    styles.blue,
    styles.indigo,
    styles.violet,
    styles.purple,
    styles.fuchsia,
    styles.pink,
    styles.rose,
  ]

  let firstRow = `Hi, I'm Liv Mari`
  let secondRow = `I design thoughtful digital experiences that spark joy and empower users`

  let firstLetters = firstRow.split('')
  let secondLetters = secondRow.split('')

  const firstRowColors = firstLetters.map(
    (_, index) => colorStyles[index % colorStyles.length]
  )
  const secondRowColors = secondLetters.map(
    (_, index) => colorStyles[index % colorStyles.length]
  )

  /* const assignColor = (index: number) => {
    let firstColor = colorStyles[0]

    colorStyles.shift()

    colorStyles.push(firstColor)

    return firstColor
  } */

  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <h1 className={styles.heading}>
        {firstLetters.map((symbol, index) => (
          <span
            className={`${symbol !== ' ' ? styles.symbol : ''} ${
              symbol !== ' ' ? firstRowColors[index] : ''
            }`}
            key={nanoid()}
          >
            {symbol}
          </span>
        ))}

        <br />

        {secondLetters.map((symbol, index) => (
          <span
            className={symbol !== ' ' ? secondRowColors[index] : ''}
            key={nanoid()}
          >
            {symbol}
          </span>
        ))}
      </h1>

      <p className={styles.currentlyText}>
        Currently: sr. UX designer at Volvo Cars
      </p>
    </section>
  )
}

export default HeroSection
