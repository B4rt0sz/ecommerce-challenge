import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import ArrowBDownIcon from 'components/icons/ArrowBDownIcon'

const mobileList = <ArrowBDownIcon />
const desktopList = [
  'Zarejestruj się',
  'Moje zamówienia',
  'Koszyk',
  'Lista zakupowa',
  'Historia transakcji',
  'Moje rabaty',
  'Newsletter',
].map((item, index) => (
  <p key={index} className='footer__account-options-item'>
    {item}
  </p>
))

const Account = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='footer__account'>
      <p className='footer__account-title'>Moje Konto</p>
      <ul className='footer__account-options'>{isDesktop ? desktopList : mobileList}</ul>
    </div>
  )
}

export default Account
