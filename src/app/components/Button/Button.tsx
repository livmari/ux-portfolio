import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  label: string
  variant?: 'inline'
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconPosition = 'left',
  label,
  variant,
  ...props
}) => {
  return (
    <button className={styles.frame} {...props}>
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
