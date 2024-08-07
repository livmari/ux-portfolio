const Snowflake: React.FC<{
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
          'M24 13L24 11L13.2071 11.5L21.1924 4.22182L19.7782 2.80761L12.5 10.7928L13 -4.80825e-07L11 -5.68248e-07L11.5 10.7929L4.22182 2.8076L2.80761 4.22182L10.7929 11.5L-4.80825e-07 11L-5.68248e-07 13L10.7929 12.5L2.80759 19.7782L4.2218 21.1924L11.5 13.2071L11 24L13 24L12.5 13.2071L19.7782 21.1924L21.1924 19.7782L13.2071 12.5L24 13Z'
        }
        className={'fill-primary-500'}
      />
    </svg>
  )
}

export default Snowflake
