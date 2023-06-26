import './index.scss'
import Logo1Icon from 'components/icons/Logo1Icon'
import SearchIcon from 'components/icons/SearchIcon'
import CartIcon from 'components/icons/CartIcon'
import BurgerIcon from 'components/icons/BurgerIcon'
import { useAppState } from 'store/store'

const headerLogo = <Logo1Icon className='header__mobileLogo' />

const HeaderMobile = () => {
  const { setMobileMenuState } = useAppState()

  const headerMenu = (
    <div className='header__mobileMenu'>
      <SearchIcon className='header__mobileMenu-search' />
      <div className='header__mobileMenu-cart'>
        <CartIcon />
        <p className='cartNumber'>1</p>
      </div>
      <BurgerIcon
        className='header__mobileMenu-burger'
        onClick={() => {
          setMobileMenuState(true)
        }}
      />
    </div>
  )

  return (
    <div className='header__mobile'>
      {headerLogo}
      {headerMenu}
    </div>
  )
}

export default HeaderMobile
