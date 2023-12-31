type ArrowSLIconProps = {
  className?: string
  onClick?: () => void
}

const ArrowSLIcon = ({ className, onClick }: ArrowSLIconProps) => {
  return (
    <svg
      width='12'
      height='21'
      viewBox='0 0 12 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M11.3796 2.64286C11.3796 2.80626 11.3095 2.94631 11.1695 3.06302L3.5014 10.7661L11.1695 18.4342C11.3095 18.5742 11.3796 18.726 11.3796 18.8894C11.3796 19.0528 11.3095 19.2045 11.1695 19.3445L10.1891 20.3249C10.0724 20.4416 9.93231 20.5 9.76891 20.5C9.60551 20.5 9.45378 20.4416 9.31373 20.3249L0.210084 11.1863C0.070028 11.0696 0 10.9295 0 10.7661C0 10.6027 0.070028 10.451 0.210084 10.3109L9.31373 1.20728C9.43044 1.06723 9.58217 0.997198 9.76891 0.997198C9.95565 0.997198 10.0957 1.06723 10.1891 1.20728L11.1695 2.18767C11.3095 2.30439 11.3796 2.45612 11.3796 2.64286Z'
        fill='black'
      />
    </svg>
  )
}

export default ArrowSLIcon
