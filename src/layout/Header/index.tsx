import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import HeaderDesktop from './Desktop'
import HeaderMobile from './Mobile'

const Header = () => {
  const isDesktop = useIsDesktopDevice()

  return <div className='header'>{isDesktop ? <HeaderDesktop /> : <HeaderMobile />}</div>
}

export default Header
