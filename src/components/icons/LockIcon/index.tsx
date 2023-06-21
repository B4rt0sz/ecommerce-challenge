type LockIconProps = {
  className?: string
  onClick?: () => void
}

const LockIcon = ({ className, onClick }: LockIconProps) => {
  return (
    <svg
      width='12'
      height='15'
      viewBox='0 0 12 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M10.125 5C10.4897 5 10.8394 5.15051 11.0973 5.41842C11.3551 5.68633 11.5 6.04969 11.5 6.42857V13.5714C11.5 13.9503 11.3551 14.3137 11.0973 14.5816C10.8394 14.8495 10.4897 15 10.125 15H1.875C1.51033 15 1.16059 14.8495 0.902728 14.5816C0.644866 14.3137 0.5 13.9503 0.5 13.5714V6.42857C0.5 6.04969 0.644866 5.68633 0.902728 5.41842C1.16059 5.15051 1.51033 5 1.875 5H2.5625V3.57143C2.5625 2.62423 2.92466 1.71582 3.56932 1.04605C4.21398 0.376274 5.08832 0 6 0C6.45142 0 6.89842 0.0923778 7.31547 0.271859C7.73253 0.45134 8.11148 0.714409 8.43068 1.04605C8.74988 1.37769 9.00309 1.7714 9.17584 2.2047C9.34859 2.63801 9.4375 3.10242 9.4375 3.57143V5H10.125ZM6 1.42857C5.45299 1.42857 4.92839 1.65434 4.54159 2.0562C4.1548 2.45806 3.9375 3.00311 3.9375 3.57143V5H8.0625V3.57143C8.0625 3.00311 7.8452 2.45806 7.45841 2.0562C7.07161 1.65434 6.54701 1.42857 6 1.42857Z'
        fill='black'
      />
    </svg>
  )
}

export default LockIcon
