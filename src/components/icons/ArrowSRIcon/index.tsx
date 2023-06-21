type ArrowSRIconProps = {
  className?: string
  onClick?: () => void
}

const ArrowSRIcon = ({ className, onClick }: ArrowSRIconProps) => {
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
        d='M11.3796 10.2689C11.3796 10.4323 11.3212 10.5724 11.2045 10.6891L2.06583 19.8277C1.94911 19.9445 1.80906 20.0028 1.64566 20.0028C1.48226 20.0028 1.33053 19.9445 1.19048 19.8277L0.210084 18.8473C0.070028 18.7073 0 18.5556 0 18.3922C0 18.2288 0.070028 18.077 0.210084 17.937L7.87815 10.2689L0.210084 2.56583C0.070028 2.44912 0 2.30906 0 2.14566C0 1.98227 0.070028 1.83054 0.210084 1.69048L1.19048 0.710089C1.30719 0.570034 1.45892 0.500006 1.64566 0.500006C1.8324 0.500006 1.97246 0.570034 2.06583 0.710089L11.2045 9.81373C11.3212 9.93044 11.3796 10.0822 11.3796 10.2689Z'
        fill='black'
      />
    </svg>
  )
}

export default ArrowSRIcon
