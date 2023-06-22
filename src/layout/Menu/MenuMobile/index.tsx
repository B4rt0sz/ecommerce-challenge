import './index.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { ContainerVariants, variantMenu } from './MotionVariants'
import BurgerIcon from 'components/icons/BurgerIcon'
import { useAppState } from 'store/store'
import { useScrollBlock } from 'hooks'
import ArrowRightIcon from 'components/icons/ArrowRightIcon'
import Search2Icon from 'components/icons/Search2Icon'
import { useRef } from 'react'
import User2Icon from 'components/icons/User2Icon'
import LockIcon from 'components/icons/LockIcon'
import WorldIcon from 'components/icons/WorldIcon'

type MenuMobileProps = {
  menuList: {
    name: string
    icon?: boolean
    click?: boolean
  }[]
}

const menuListMobile = [
  { name: 'Zaloguj się', icon: <User2Icon /> },
  { name: 'Zarejestruj się', icon: <LockIcon /> },
  { name: 'Sprawdź status zamówienia', icon: <WorldIcon /> },
]

const MenuMobile = ({ menuList }: MenuMobileProps) => {
  const { mobileMenuState, setMobileMenuState } = useAppState()
  const ref = useRef<HTMLInputElement>(null)
  const [allowScroll] = useScrollBlock()

  const list = menuList.map((item, index) => (
    <li key={index} className='mobileMenuContent__item'>
      <p>{item.name}</p>
      {item.icon && <ArrowRightIcon />}
    </li>
  ))

  const menuSearch = (
    <li className='mobileMenuContent__item'>
      <div className='mobileMenuContent__item-search'>
        <input className='item__input' ref={ref} type='text' placeholder='Wpisz czego szukasz' />
        <Search2Icon
          className='item__icon'
          onClick={() => {
            ref.current!.focus()
          }}
        />
      </div>
    </li>
  )

  const menuMobileExtra = menuListMobile.map((item, index) => (
    <li key={index} className='mobileMenuContent__item'>
      <div className='mobileMenuContent__item-extra'>
        {item.icon}
        <p>{item.name}</p>
      </div>
    </li>
  ))

  const menuContent = (
    <ul className='mobileMenuContent'>
      {list}
      {menuSearch}
      {menuMobileExtra}
    </ul>
  )

  return (
    <>
      <AnimatePresence mode='wait'>
        {mobileMenuState && (
          <motion.div
            className='menu__mobile'
            variants={variantMenu}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <motion.div
              className='menu__mobile-clear'
              variants={ContainerVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              onClick={() => {
                setMobileMenuState(false)
                allowScroll()
              }}
            >
              <BurgerIcon
                className='menu__mobile-burger'
                onClick={() => {
                  setMobileMenuState(false)
                  allowScroll()
                }}
              />
            </motion.div>
            <div className='menu__mobile-content'>{menuContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuMobile
