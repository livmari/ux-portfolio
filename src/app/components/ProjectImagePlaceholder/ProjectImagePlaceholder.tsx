import styles from './ProjectImagePlaceholder.module.scss'

interface ProjectImagePlaceholderProps {
  logo?: React.ReactNode
  className?: string
}

const ProjectImagePlaceholder: React.FC<ProjectImagePlaceholderProps> = ({
  logo,
  className = '',
}) => {
  return <div className={`${styles.frame} ${className}`}>{logo && logo}</div>
}

export default ProjectImagePlaceholder
