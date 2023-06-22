type Logo2IconProps = {
  className?: string
  onClick?: () => void
}

const Logo2Icon = ({ className, onClick }: Logo2IconProps) => {
  return (
    <svg
      width='208'
      height='36'
      viewBox='0 0 208 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`icon ${className ? className : ''}`}
      onClick={onClick}
    >
      <path
        d='M19.5005 30.3526C15.726 26.5781 15.726 20.4585 19.5005 16.6839L26.3348 9.84961L33.1692 16.6839C36.9436 20.4585 36.9436 26.5781 33.1692 30.3525C29.3946 34.1271 23.275 34.1271 19.5005 30.3526Z'
        fill='white'
      />
      <path
        d='M32.9495 18.5364C34.1545 21.5266 33.5463 25.0773 31.1226 27.5009C27.8853 30.7382 22.6365 30.7382 19.3992 27.5009C19.1214 27.2231 18.8764 26.926 18.6462 26.6211C19.0509 27.6253 19.6593 28.5663 20.4731 29.3802C23.7104 32.6175 28.9593 32.6175 32.1965 29.3802C35.1561 26.4206 35.4012 21.7844 32.9495 18.5364Z'
        fill='#00BEFF'
      />
      <path
        d='M3.51423 28.2684C-1.17133 23.5828 -1.17133 15.986 3.51423 11.3004L11.9982 2.81641L20.4822 11.3004C25.1677 15.986 25.1677 23.5828 20.4822 28.2684C15.7966 32.9539 8.1998 32.9539 3.51423 28.2684Z'
        fill='white'
      />
      <path
        d='M20.2094 13.5999C21.7054 17.3119 20.9502 21.7196 17.9416 24.7282C13.9228 28.747 7.40708 28.747 3.38838 24.7282C3.04358 24.3834 2.7394 24.0146 2.45374 23.6362C2.95607 24.8826 3.71125 26.0509 4.72156 27.0612C8.74034 31.08 15.2561 31.08 19.2748 27.0612C22.9488 23.3872 23.253 17.632 20.2094 13.5999Z'
        fill='#00BEFF'
      />

      <path
        d='M48.592 28V6.816H63.888V9.12H50.992V16.48H62.48V18.816H50.992V28H48.592ZM65.9238 28V12H68.3238V15.936C68.4091 15.6587 68.5691 15.296 68.8038 14.848C69.0598 14.3787 69.4224 13.9093 69.8918 13.44C70.3611 12.9707 70.9478 12.576 71.6518 12.256C72.3771 11.9147 73.2304 11.744 74.2118 11.744H74.3718V14.144H74.0838C72.8891 14.144 71.8544 14.4747 70.9798 15.136C70.1264 15.776 69.4651 16.6187 68.9958 17.664C68.5478 18.688 68.3238 19.7867 68.3238 20.96V28H65.9238ZM83.6528 28.256C82.0314 28.256 80.6128 27.8933 79.3968 27.168C78.1808 26.4213 77.2314 25.4187 76.5488 24.16C75.8874 22.9013 75.5568 21.5147 75.5568 20C75.5568 18.464 75.8768 17.0773 76.5168 15.84C77.1568 14.5813 78.0741 13.5893 79.2688 12.864C80.4634 12.1173 81.8714 11.744 83.4928 11.744C85.1354 11.744 86.5434 12.1173 87.7168 12.864C88.9114 13.5893 89.8288 14.5813 90.4688 15.84C91.1088 17.0773 91.4288 18.464 91.4288 20V20.96H78.0208C78.1488 21.8987 78.4474 22.7627 78.9168 23.552C79.4074 24.32 80.0581 24.9387 80.8688 25.408C81.6794 25.856 82.6181 26.08 83.6848 26.08C84.8154 26.08 85.7648 25.8347 86.5328 25.344C87.3008 24.832 87.8981 24.1813 88.3248 23.392H90.9488C90.3941 24.8213 89.5088 25.9947 88.2928 26.912C87.0981 27.808 85.5514 28.256 83.6528 28.256ZM78.0528 18.72H88.9328C88.7194 17.3547 88.1434 16.2133 87.2048 15.296C86.2661 14.3787 85.0288 13.92 83.4928 13.92C81.9568 13.92 80.7194 14.3787 79.7808 15.296C78.8634 16.2133 78.2874 17.3547 78.0528 18.72ZM100.185 28.256C98.7133 28.256 97.4653 28.0107 96.4413 27.52C95.4386 27.0293 94.6706 26.3893 94.1373 25.6C93.6039 24.7893 93.3053 23.9147 93.2413 22.976H95.7373C95.8013 23.5093 95.9826 24.032 96.2812 24.544C96.6013 25.0347 97.0813 25.44 97.7213 25.76C98.3613 26.0587 99.1933 26.208 100.217 26.208C100.537 26.208 100.932 26.176 101.401 26.112C101.871 26.048 102.319 25.9307 102.745 25.76C103.193 25.5893 103.567 25.3333 103.865 24.992C104.164 24.6507 104.313 24.2133 104.313 23.68C104.313 23.0187 104.057 22.5067 103.545 22.144C103.033 21.7813 102.372 21.504 101.561 21.312C100.751 21.0987 99.8866 20.896 98.9693 20.704C98.0733 20.512 97.2199 20.2667 96.4093 19.968C95.5986 19.648 94.9373 19.2107 94.4253 18.656C93.9133 18.08 93.6573 17.3013 93.6573 16.32C93.6573 14.8693 94.1799 13.7493 95.2253 12.96C96.2919 12.1493 97.8599 11.744 99.9293 11.744C101.337 11.744 102.479 11.968 103.353 12.416C104.249 12.8427 104.921 13.3973 105.369 14.08C105.839 14.7627 106.116 15.4987 106.201 16.288H103.769C103.684 15.6053 103.343 15.0187 102.745 14.528C102.169 14.0373 101.209 13.792 99.8653 13.792C97.3266 13.792 96.0573 14.56 96.0573 16.096C96.0573 16.736 96.3133 17.2267 96.8253 17.568C97.3373 17.9093 97.9986 18.1867 98.8093 18.4C99.6199 18.592 100.473 18.784 101.369 18.976C102.287 19.1467 103.151 19.392 103.961 19.712C104.772 20.032 105.433 20.4907 105.945 21.088C106.457 21.664 106.713 22.4533 106.713 23.456C106.713 25.0133 106.116 26.208 104.921 27.04C103.748 27.8507 102.169 28.256 100.185 28.256ZM109.799 28V5.6H112.199V14.496C112.775 13.728 113.479 13.0773 114.311 12.544C115.143 12.0107 116.209 11.744 117.511 11.744C118.62 11.744 119.655 12.0107 120.615 12.544C121.596 13.056 122.385 13.8347 122.983 14.88C123.601 15.904 123.911 17.1733 123.911 18.688V28H121.511V18.752C121.511 17.3013 121.095 16.1387 120.263 15.264C119.431 14.368 118.353 13.92 117.031 13.92C116.135 13.92 115.324 14.1227 114.599 14.528C113.873 14.9333 113.287 15.5093 112.839 16.256C112.412 16.9813 112.199 17.824 112.199 18.784V28H109.799ZM131.028 28L126.004 12H128.564L132.404 25.024L136.468 12H139.092L143.156 25.024L146.996 12H149.556L144.532 28H141.78L137.78 15.232L133.78 28H131.028ZM158.238 28.256C156.681 28.256 155.316 27.8933 154.142 27.168C152.99 26.4213 152.094 25.4187 151.454 24.16C150.814 22.9013 150.494 21.5147 150.494 20C150.494 18.464 150.814 17.0773 151.454 15.84C152.094 14.5813 152.99 13.5893 154.142 12.864C155.316 12.1173 156.681 11.744 158.238 11.744C159.561 11.744 160.692 12 161.63 12.512C162.59 13.024 163.369 13.7173 163.966 14.592V12H166.366V28H163.966V25.44C163.369 26.2933 162.59 26.976 161.63 27.488C160.692 28 159.561 28.256 158.238 28.256ZM158.558 26.08C159.753 26.08 160.756 25.8027 161.566 25.248C162.398 24.6933 163.028 23.9573 163.454 23.04C163.881 22.1013 164.094 21.088 164.094 20C164.094 18.8907 163.881 17.8773 163.454 16.96C163.028 16.0427 162.398 15.3067 161.566 14.752C160.756 14.1973 159.753 13.92 158.558 13.92C157.385 13.92 156.372 14.1973 155.518 14.752C154.665 15.3067 154.014 16.0427 153.566 16.96C153.118 17.8773 152.894 18.8907 152.894 20C152.894 21.088 153.118 22.1013 153.566 23.04C154.014 23.9573 154.665 24.6933 155.518 25.248C156.372 25.8027 157.385 26.08 158.558 26.08ZM172.246 28V14.112H168.982V12H172.246V6.272H174.646V12H178.326V14.112H174.646V28H172.246ZM187.747 28.256C186.125 28.256 184.707 27.8933 183.491 27.168C182.275 26.4213 181.325 25.4187 180.643 24.16C179.981 22.9013 179.651 21.5147 179.651 20C179.651 18.464 179.971 17.0773 180.611 15.84C181.251 14.5813 182.168 13.5893 183.363 12.864C184.557 12.1173 185.965 11.744 187.587 11.744C189.229 11.744 190.637 12.1173 191.811 12.864C193.005 13.5893 193.923 14.5813 194.562 15.84C195.203 17.0773 195.523 18.464 195.523 20V20.96H182.115C182.243 21.8987 182.541 22.7627 183.011 23.552C183.501 24.32 184.152 24.9387 184.963 25.408C185.773 25.856 186.712 26.08 187.779 26.08C188.909 26.08 189.859 25.8347 190.627 25.344C191.395 24.832 191.992 24.1813 192.419 23.392H195.043C194.488 24.8213 193.603 25.9947 192.387 26.912C191.192 27.808 189.645 28.256 187.747 28.256ZM182.147 18.72H193.027C192.813 17.3547 192.237 16.2133 191.299 15.296C190.36 14.3787 189.123 13.92 187.587 13.92C186.051 13.92 184.813 14.3787 183.875 15.296C182.957 16.2133 182.381 17.3547 182.147 18.72ZM198.455 28V12H200.855V15.936C200.94 15.6587 201.1 15.296 201.335 14.848C201.591 14.3787 201.954 13.9093 202.423 13.44C202.892 12.9707 203.479 12.576 204.183 12.256C204.908 11.9147 205.762 11.744 206.743 11.744H206.903V14.144H206.615C205.42 14.144 204.386 14.4747 203.511 15.136C202.658 15.776 201.996 16.6187 201.527 17.664C201.079 18.688 200.855 19.7867 200.855 20.96V28H198.455Z'
        fill='white'
      />
    </svg>
  )
}

export default Logo2Icon
