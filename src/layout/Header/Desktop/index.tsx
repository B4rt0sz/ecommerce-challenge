import './index.scss'
import { useRef } from 'react'
import Logo1Icon from 'components/icons/Logo1Icon'
import SearchIcon from 'components/icons/SearchIcon'
import CartIcon from 'components/icons/CartIcon'
import UserIcon from 'components/icons/UserIcon'
import HeartIcon from 'components/icons/HeartIcon'

const headerLogo = (
  <div className='header__desktopLogo'>
    <Logo1Icon />
  </div>
)

const headerMenu = (
  <div className='header__desktopMenu'>
    <UserIcon className='header__desktopMenu-user' />
    <div className='header__desktopMenu-favorite'>
      <HeartIcon />
      <p className='favoriteNumber'>0</p>
    </div>
    <div className='header__desktopMenu-summary'>
      <div className='summary__cart'>
        <CartIcon className='cartIcon' />
        <p className='cartNumber'>0</p>
      </div>
      <p className='summary__price'>0,00zł</p>
    </div>
  </div>
)

const HeaderDesktop = () => {
  const ref = useRef<HTMLInputElement>(null)

  const headerSearch = (
    <div className='header__desktopSearch'>
      <input
        className='header__desktopSearch-text'
        ref={ref}
        type='text'
        placeholder='Wpisz czego szukasz'
      />
      <SearchIcon
        className='header__desktopSearch-icon'
        onClick={() => {
          ref.current!.focus()
        }}
      />
    </div>
  )

  return (
    <div className='header__desktop'>
      <div className='header__desktop-container'>
        {headerLogo}
        {headerSearch}
        {headerMenu}
      </div>
    </div>
  )
}

export default HeaderDesktop
