import { Snowflake, Sparkle } from '@/components/illustrations'

import styles from './SparkleToSnowflake.module.scss'

const SparkleToSnowflake: React.FC = () => {
  return (
    <div className={styles.animationContainer}>
      <Sparkle />
      <Snowflake />
    </div>
  )
}

export default SparkleToSnowflake
