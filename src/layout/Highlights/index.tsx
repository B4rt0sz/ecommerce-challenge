import './index.scss'
import ArrowIcon from 'components/icons/ArrowIcon'
import CupIcon from 'components/icons/CupIcon'
import PersonIcon from 'components/icons/PersonIcon'
import PathIcon from 'components/icons/PathIcon'

const highlightsList = [
  { icon: <CupIcon />, title: 'Najszybsza dostawa' },
  { icon: <ArrowIcon />, title: 'Aż 180 dni na zwrot' },
  { icon: <PersonIcon />, title: 'Profesjonalne doradztwo' },
  { icon: <PathIcon />, title: 'Darmowa dostawa od 200 zł' },
]

const Highlights = () => {
  return (
    <div className='highlights'>
      <div className='highlights__container'>
        {highlightsList.map((item) => (
          <div className='highlights__container-item' key={item.title}>
            {item.icon} <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Highlights
