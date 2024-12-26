import 'components/Layout/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__contents">
        <div>LOGO</div>
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
