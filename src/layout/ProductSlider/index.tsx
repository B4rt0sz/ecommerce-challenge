import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import SimpleImageSlider from 'react-simple-image-slider'
import promoDesktop from './images/promoDesktop.png'
import promoMobile from './images/promoMobile.png'

const desktopPromoList = [promoDesktop, promoDesktop, promoDesktop]
const mobilePromoList = [promoMobile, promoMobile, promoMobile]

const ProductSlider = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='productSlider'>
      <SimpleImageSlider
        width={isDesktop ? 870 : 341}
        height={isDesktop ? 409 : 434}
        images={isDesktop ? desktopPromoList : mobilePromoList}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  )
}

export default ProductSlider
