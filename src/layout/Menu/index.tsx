import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const Menu = () => {
  const isDesktop = useIsDesktopDevice()

  return <>{isDesktop ? <MenuDesktop /> : <MenuMobile />}</>
}

export default Menu
