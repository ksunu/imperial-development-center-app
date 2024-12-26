import { useAppContext } from 'context/AppContext'
import 'components/Layout/Header/Header.scss'
import { CategoryTypesEnum } from 'types'

const Header = () => {
  const { currentCategory } = useAppContext()

  const categoryTitle = CategoryTypesEnum[currentCategory]

  return (
    <header className="header">
      <div className="header__contents">
        <h1>
          {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
        </h1>
        <nav className="header__contents--navigation">
          <ul>
            <li>MENU 1</li>
            <li>MENU 2</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
