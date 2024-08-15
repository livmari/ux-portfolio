import styles from './ToolCard.module.scss'

interface ToolCardProps {
  illustration?: React.ReactNode
  link?: string
}

const ToolCard: React.FC<ToolCardProps> = ({ illustration, link }) => {
  return (
    <a href={link} className={styles.frame} target={'_blank'} rel={'noopener'}>
      {illustration}
    </a>
  )
}

export default ToolCard
