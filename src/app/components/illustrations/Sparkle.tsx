const Sparkle: React.FC<{
  size?: number
}> = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={'0 0 24 24'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M16.5001 7.5C18.9153 9.91526 24.0001 12 24.0001 12C24.0001 12 18.9153 14.0847 16.5 16.5C14.0848 18.9153 12 24 12 24C12 24 9.91526 18.9153 7.5 16.5C5.08474 14.0847 5.88968e-05 12 5.88968e-05 12C5.88968e-05 12 5.0848 9.91526 7.50006 7.5C9.91532 5.08474 12.0001 0 12.0001 0C12.0001 0 14.0848 5.08474 16.5001 7.5Z'
        }
        className={'fill-primary-500'}
      />
    </svg>
  )
}

export default Sparkle
