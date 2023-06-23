import './index.scss'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contacts'
import Orders from './components/Orders'
import Account from './components/Account'
import Info from './components/Info'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <SocialMedia />
        <Contact />
        <Orders />
        <Account />
        <Info />
      </div>
    </div>
  )
}

export default Footer
