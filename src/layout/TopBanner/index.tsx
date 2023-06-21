import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'

const bannerText = 'Tylko dzisiaj! Darmowa dostawa dla zamówień od 100zł'

const TopBanner = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className={`topBanner ${isDesktop ? 'topBanner__desktop' : 'topBanner__mobile'}`}>
      <p className={isDesktop ? 'topBanner__textDesktop' : 'topBanner__textMobile'}>{bannerText}</p>
    </div>
  )
}

export default TopBanner
