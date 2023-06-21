type ArrowSDownIconProps = {
  className?: string
  onClick?: () => void
}

const ArrowSDownIcon = ({ className, onClick }: ArrowSDownIconProps) => {
  return (
    <svg
      width='8'
      height='5'
      viewBox='0 0 8 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M7.7681 0.932997C7.7681 0.993664 7.7421 1.04566 7.6901 1.089L4.3101 4.482C4.26677 4.52533 4.21043 4.547 4.1411 4.547C4.07177 4.547 4.01977 4.52533 3.9851 4.482L0.6051 1.089C0.5531 1.04566 0.5271 0.993664 0.5271 0.932997C0.5271 0.872331 0.5531 0.815997 0.6051 0.763997L0.9691 0.399997C1.01243 0.347997 1.06443 0.321997 1.1251 0.321997C1.18577 0.321997 1.2421 0.347997 1.2941 0.399997L4.1411 3.247L7.0011 0.399997C7.04443 0.347997 7.10077 0.321997 7.1701 0.321997C7.23943 0.321997 7.29143 0.347997 7.3261 0.399997L7.6901 0.763997C7.7421 0.807331 7.7681 0.863664 7.7681 0.932997Z'
        fill='black'
      />
    </svg>
  )
}

export default ArrowSDownIcon
