import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const menuList = [
  { name: 'Do lodówek', icon: true, click: true },
  { name: 'Do ekspresów', icon: true },
  { name: 'Dzbanki, butelki i wkłądy filtrujące', icon: true },
  { name: 'Do lodówek' },
  { name: 'Kawa ziarnista' },
  { name: 'Coś do kawy' },
  { name: 'Promocje' },
]

const Menu = () => {
  const isDesktop = useIsDesktopDevice()

  return <>{isDesktop ? <MenuDesktop menuList={menuList} /> : <MenuMobile menuList={menuList} />}</>
}

export default Menu
