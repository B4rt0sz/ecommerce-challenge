type ArrowBDownIconProps = {
  className?: string
  onClick?: () => void
}

const ArrowBDownIcon = ({ className, onClick }: ArrowBDownIconProps) => {
  return (
    <svg
      width='18'
      height='10'
      viewBox='0 0 18 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M9.00004 9.90904C8.79079 9.90904 8.58134 9.82906 8.42159 9.66931L0.239778 1.4875C-0.079926 1.16781 -0.079926 0.650091 0.239778 0.330603C0.55948 0.0110989 1.07718 0.0108929 1.39669 0.330603L9.00004 7.93396L16.6034 0.330603C16.9231 0.0108929 17.4408 0.0108929 17.7603 0.330603C18.0798 0.650305 18.08 1.16801 17.7603 1.4875L9.57849 9.66931C9.41875 9.82906 9.20929 9.90904 9.00004 9.90904Z'
        fill='white'
      />
    </svg>
  )
}

export default ArrowBDownIcon
