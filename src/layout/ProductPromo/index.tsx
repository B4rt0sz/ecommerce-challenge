import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import productImg1 from './images/product1.png'
import productImg2 from './images/product2.png'
import productImg3 from './images/product3.png'
import productImg4 from './images/product4.png'
import CartIcon from 'components/icons/CartIcon'

const productList = [
  {
    img: productImg1,
    title: 'Tabletki czyszczące do ekspresuSiemens Bosch TZ80001 2w1 - oryginał',
    newPrice: '35,40zł',
    oldPrice: '38,90zł',
  },
  {
    img: productImg2,
    title: '3x Filtr Seltino Ocea zamiennik do Philips Saeco CA6903 AquaClean',
    newPrice: '44,20zł',
    oldPrice: '52,00zł',
  },
  {
    img: productImg3,
    title: '2x Filtr Seltino SBH-Ultra zamiennik do Ultra Clarity 644845',
    newPrice: '110,50zł',
    oldPrice: '130,00zł',
  },
  {
    img: productImg4,
    title: 'ZESTAW: 2x Odkamieniacz Seltino Entkalker 1000 ml + szczoteczka',
    newPrice: '30,02zł',
    oldPrice: '35,32zł',
  },
]

const ProductPromo = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='productPromo'>
      <p className='productPromo__title'>Nasze produkty</p>
      <Swiper
        slidesPerView={isDesktop ? 4 : 1}
        spaceBetween={39}
        navigation={true}
        modules={[Navigation]}
        className='productPromo__carousel'
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index} className='productPromo__carousel-item'>
            <img className='carousel__img' src={item.img} alt='product' />
            <p className='carousel__title'>{item.title}</p>
            <p className='carousel__newPrice'>{item.newPrice}</p>
            <p className='carousel__oldPrice'>{item.oldPrice}</p>
            <div className='carousel__cart'>
              <CartIcon />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductPromo
