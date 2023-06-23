import './index.scss'
import PhoneIcon from 'components/icons/PhoneIcon'

const Contact = () => {
  return (
    <div className='footer__contact'>
      <div className='footer__contact-phone'>
        <p className='phone__title'>Kontakt</p>
        <div className='phone__number'>
          <PhoneIcon />
          <p>+48 500 500 500</p>
        </div>
        <p className='phone__info'>Od poniedziałku do piątku w godzinach 08:00-16:00</p>
      </div>
      <div className='footer__contact-mail'>
        <p className='mail__title'>Email</p>
        <p className='mail__info'>kontakt@freshwater.pl</p>
      </div>
    </div>
  )
}

export default Contact
