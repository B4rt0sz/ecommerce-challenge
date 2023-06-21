type PersonIconProps = {
  className?: string
  onClick?: () => void
}

const PersonIcon = ({ className, onClick }: PersonIconProps) => {
  return (
    <svg
      width='27'
      height='28'
      viewBox='0 0 27 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M13.57 16.019C11.7862 16.0222 10.0564 15.4066 8.67572 14.2771C7.295 13.1476 6.34879 11.5742 5.99841 9.82505C5.64802 8.07595 5.91515 6.25946 6.75425 4.68528C7.59335 3.1111 8.95248 1.87669 10.5999 1.19251C12.2473 0.508327 14.0811 0.416731 15.7885 0.933336C17.4959 1.44994 18.9713 2.54276 19.9631 4.02549C20.9549 5.50821 21.4017 7.28904 21.2274 9.06435C21.053 10.8397 20.2683 12.4996 19.007 13.761C17.5656 15.2046 15.61 16.0168 13.57 16.019ZM13.57 2.02902C12.1098 2.02571 10.6936 2.52903 9.56304 3.45314C8.43243 4.37725 7.65739 5.66494 7.37007 7.09661C7.08275 8.52829 7.30094 10.0153 7.98745 11.3041C8.67395 12.5929 9.78625 13.6036 11.1347 14.164C12.4831 14.7243 13.9842 14.7996 15.3819 14.3769C16.7796 13.9543 17.9874 13.0598 18.7994 11.8462C19.6114 10.6325 19.9772 9.17481 19.8345 7.72158C19.6919 6.26834 19.0495 4.90959 18.017 3.87702C16.8379 2.69642 15.2386 2.03181 13.57 2.02902Z'
        fill='white'
      />
      <path
        d='M26.161 27.2105C25.9754 27.2105 25.7973 27.1368 25.666 27.0055C25.5348 26.8742 25.461 26.6962 25.461 26.5105C25.461 23.7279 24.3556 21.0592 22.388 19.0915C20.4203 17.1239 17.7517 16.0185 14.969 16.0185H12.169C9.38671 16.019 6.71855 17.1247 4.75135 19.0923C2.78415 21.0598 1.67902 23.7282 1.67902 26.5105C1.67902 26.6962 1.60527 26.8742 1.47399 27.0055C1.34272 27.1368 1.16467 27.2105 0.979018 27.2105C0.793367 27.2105 0.615319 27.1368 0.484044 27.0055C0.352768 26.8742 0.279018 26.6962 0.279018 26.5105C0.282724 23.3578 1.53685 20.3353 3.76626 18.106C5.99567 15.8768 9.01829 14.6229 12.171 14.6195H14.971C18.1234 14.6235 21.1455 15.8776 23.3745 18.1067C25.6035 20.3359 26.8573 23.3581 26.861 26.5105C26.861 26.6962 26.7873 26.8742 26.656 27.0055C26.5247 27.1368 26.3467 27.2105 26.161 27.2105Z'
        fill='white'
      />
      <path
        d='M13.5696 27.2105C13.4778 27.2117 13.3867 27.1936 13.3023 27.1574C13.2179 27.1213 13.1421 27.0678 13.0796 27.0005L11.6796 25.6005C11.6023 25.5248 11.5433 25.4325 11.5069 25.3307C11.4705 25.2288 11.4578 25.12 11.4696 25.0125L12.8696 15.2195C12.9011 15.0569 12.9881 14.9104 13.1159 14.805C13.2436 14.6997 13.404 14.642 13.5696 14.642C13.7352 14.642 13.8956 14.6997 14.0233 14.805C14.1511 14.9104 14.2381 15.0569 14.2696 15.2195L15.6696 25.0125C15.6815 25.12 15.6688 25.2288 15.6324 25.3307C15.596 25.4326 15.5369 25.5248 15.4596 25.6005L14.0596 27.0005C13.9971 27.0678 13.9213 27.1213 13.8369 27.1574C13.7525 27.1936 13.6614 27.2117 13.5696 27.2105ZM12.9116 24.8605L13.5696 25.5185L14.2276 24.8605L13.5696 20.2715L12.9116 24.8605Z'
        fill='white'
      />
    </svg>
  )
}

export default PersonIcon
