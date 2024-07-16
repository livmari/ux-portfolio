import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  label,
  className = '',
  ...props
}) => {
  return (
    <button className={`${styles.frame} ${className}`} {...props}>
      {leftIcon && <span>{leftIcon}</span>}

      {label && <span className={styles.label}>{label}</span>}

      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}

export default Button
