import './index.scss'
import { useState } from 'react'
import ArrowSDownIcon from 'components/icons/ArrowSDownIcon'

type MenuDesktopProps = {
  menuList: { name: string; icon?: boolean; click?: boolean }[]
}

const itemList = ['Samsung', 'Bosh', 'LG', 'Whirpool', 'Panasonic', 'Panasonic']

const MenuDesktop = ({ menuList }: MenuDesktopProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const list = menuList.map((item, index) => (
    <li
      key={index}
      className={`desktopMenuContent__item ${isOpen && item.click && 'active'}`}
      onClick={() => {
        if (item.click) setIsOpen(!isOpen)
      }}
    >
      <p>{item.name}</p>
      {item.icon && <ArrowSDownIcon />}
      {isOpen && item.click && (
        <div className='desktopMenuContent__item-content'>
          <p>Filtry wody do lodówek</p>
          {itemList.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      )}
    </li>
  ))

  return (
    <div className='menu__desktop'>
      <ul className='desktopMenuContent'>{list}</ul>
    </div>
  )
}

export default MenuDesktop
