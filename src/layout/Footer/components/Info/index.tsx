import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import ArrowBDownIcon from 'components/icons/ArrowBDownIcon'

const mobileList = <ArrowBDownIcon />
const desktopList = [
  'Informacje o sklepie',
  'Wysyłka',
  'Sposoby płatności',
  'Regulamin',
  'Polityka prywatności',
  'Odstąpienie od umowy',
  'Blog',
  'Kontakt',
].map((item, index) => (
  <p key={index} className='footer__info-options-item'>
    {item}
  </p>
))

const Info = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='footer__info'>
      <p className='footer__info-title'>Informacje</p>
      <ul className='footer__info-options'>{isDesktop ? desktopList : mobileList}</ul>
    </div>
  )
}

export default Info
