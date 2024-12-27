import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthEurope,
  faPlaceOfWorship,
  faPeopleGroup,
  faTruckPickup,
} from '@fortawesome/free-solid-svg-icons'

import { useAppContext } from 'context/AppContext'
import 'components/Layout/SideMenu/SideMenu.scss'
import { CategoryTypes, CategoryTypesEnum } from 'types'

const navItems = [
  {
    label: 'Planets',
    url: '/',
    icon: faEarthEurope,
    name: CategoryTypesEnum.planets,
  },
  {
    label: 'Starships',
    url: '/starships',
    icon: faPlaceOfWorship,
    name: CategoryTypesEnum.starships,
  },
  {
    label: 'People',
    url: '/people',
    icon: faPeopleGroup,
    name: CategoryTypesEnum.people,
  },
  {
    label: 'Vehicles',
    url: '/vehicles',
    icon: faTruckPickup,
    name: CategoryTypesEnum.vehicles,
  },
]

const SideMenu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { currentCategory, setCurrentCategory } = useAppContext()

  useEffect(() => {
    if (pathname) setCurrentCategory(pathname.replace('/', '') as CategoryTypes)
  }, [])

  useEffect(() => {
    if (!currentCategory) setCurrentCategory(CategoryTypesEnum.planets)
  }, [currentCategory])

  const handleNavigation = (url: string, name: CategoryTypes) => {
    setCurrentCategory(name)
    navigate(url)
  }

  return (
    <div className="side-menu">
      <div className="side-menu__logo">
        <img src="assets/logos/star-wars-main-logo.png" alt="main-logo" />
      </div>
      <div className="side-menu__navigation-items">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={
                item.name === currentCategory
                  ? 'side-menu__navigation-items--selected'
                  : ''
              }
              onClick={() => handleNavigation(item.url, item.name)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <div className="side-menu__navigation-items--name">
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
