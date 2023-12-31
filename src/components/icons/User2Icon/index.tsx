type User2IconProps = {
  className?: string
  onClick?: () => void
}

const User2Icon = ({ className, onClick }: User2IconProps) => {
  return (
    <svg
      width='13'
      height='15'
      viewBox='0 0 13 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M6.67647 7.5C8.62592 7.5 10.2059 5.9332 10.2059 4C10.2059 2.0668 8.62592 0.5 6.67647 0.5C4.72702 0.5 3.14706 2.0668 3.14706 4C3.14706 5.9332 4.72702 7.5 6.67647 7.5ZM9.14706 8.375H8.68658C8.07445 8.65391 7.39338 8.8125 6.67647 8.8125C5.95956 8.8125 5.28125 8.65391 4.66636 8.375H4.20588C2.15993 8.375 0.5 10.0211 0.5 12.05V13.1875C0.5 13.9121 1.09283 14.5 1.82353 14.5H11.5294C12.2601 14.5 12.8529 13.9121 12.8529 13.1875V12.05C12.8529 10.0211 11.193 8.375 9.14706 8.375Z'
        fill='black'
      />
    </svg>
  )
}

export default User2Icon
