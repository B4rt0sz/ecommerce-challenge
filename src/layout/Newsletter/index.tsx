import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'
import NewsletterInfo from './components/NewsletterInfo'
import newsletterImg1 from './components/images/newsletter1.png'
import newsletterImg2 from './components/images/newsletter2.png'

const Newsletter = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='newsletter'>
      <img className='newsletter__img' src={newsletterImg2} alt='newsletter-img2' />
      <NewsletterInfo />
      {isDesktop && <img className='newsletter__img' src={newsletterImg1} alt='newsletter-img1' />}
    </div>
  )
}

export default Newsletter
