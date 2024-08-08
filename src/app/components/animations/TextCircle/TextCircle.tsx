'use client'

import styles from './TextCircle.module.scss'

const TextCircle: React.FC = () => {
  return (
    <div
      className={`${styles.textCircle} h-[100px] w-[100px] pointer-events-none text-primary-300`}
    >
      <svg height={'100'} width={'100'} viewBox={'0 0 100 100'}>
        <path
          id={'curve-wnxkz4'}
          d={
            'M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50'
          }
          strokeWidth={'none'}
          fill={'transparent'}
        ></path>
        <text>
          <textPath
            href={'#curve-wnxkz4'}
            startOffset={'0'}
            dominantBaseline={'Hanging'}
            className={styles.text}
          >
            &nbsp;✦ THANK YOU ✦ FOR VISITING &nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default TextCircle
