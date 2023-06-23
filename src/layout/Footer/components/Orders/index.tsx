import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'

const mobileList = [
  'Status zamówienia',
  'Śledzenie przesyłki',
  'Chcę zareklamować',
  'Chcę zwrócić towar',
].map((item, index) => (
  <p key={index} className='footer__orders-options-item'>
    {item}
  </p>
))

const desktopList = ['Status zamówienia', 'Chcę zareklamować', 'Chcę zwrócić towar'].map(
  (item, index) => (
    <p key={index} className='footer__orders-options-item'>
      {item}
    </p>
  )
)

const Orders = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='footer__orders'>
      <p className='footer__orders-title'>Moje Zamówienia</p>
      <ul className='footer__orders-options'>{isDesktop ? desktopList : mobileList}</ul>
    </div>
  )
}

export default Orders
