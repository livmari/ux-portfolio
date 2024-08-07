import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  label: string
  variant?: 'primary' | 'default'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconPosition = 'left',
  label,
  variant = 'default',
  className,
  ...props
}) => {
  const assignVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary
      default:
        return styles.default
    }
  }

  return (
    <button
      className={`${styles.frame} ${className} ${assignVariantStyle()}`}
      {...props}
    >
      {icon && iconPosition === 'left' ? (
        <span className={styles.iconFrame}>{icon}</span>
      ) : null}

      <span className={styles.label}>{label}</span>

      {icon && iconPosition === 'right' ? (
        <span className={styles.iconFrame}>{icon}</span>
      ) : null}
    </button>
  )
}

export default Button
