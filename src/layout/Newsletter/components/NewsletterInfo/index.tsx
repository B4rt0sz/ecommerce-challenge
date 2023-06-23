import './index.scss'
import { useIsDesktopDevice } from 'hooks/useMediaQuery'

const NewsletterInfo = () => {
  const isDesktop = useIsDesktopDevice()

  return (
    <div className='newsletter__info'>
      {isDesktop ? (
        <p className='newsletter__info-title'>Bądź na bieżąco z aktualnymi promocjami.</p>
      ) : (
        <p className='newsletter__info-title'>
          Zyskaj <span>15% zniżki</span> na pierwsze zakupy
        </p>
      )}
      <p className='newsletter__info-subtitle'>Dołącz do newslettera</p>
      <form className='newsletter__info-form'>
        <input className='form__input' type='text' placeholder='Twój email' />
        <label className='form__label' htmlFor=''>
          <input type='checkbox' />
          <span>Wyrażam zgodę na przetwarzanie moich danych zgodnie z polityką prywatności</span>
        </label>
        <button className='form__button' type='submit' onClick={(e) => e.preventDefault()}>
          Zapisz się
        </button>
      </form>
    </div>
  )
}

export default NewsletterInfo
