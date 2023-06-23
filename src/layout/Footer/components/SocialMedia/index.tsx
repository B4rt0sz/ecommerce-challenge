import './index.scss'
import FbIcon from 'components/icons/FbIcon'
import IgIcon from 'components/icons/IgIcon'
import Logo2Icon from 'components/icons/Logo2Icon'

const SocialMedia = () => {
  return (
    <div className='footer__socialMedia'>
      <Logo2Icon className='footer__socialMedia-logo' />
      <div className='footer__socialMedia-icons'>
        <FbIcon />
        <IgIcon />
      </div>
    </div>
  )
}

export default SocialMedia
