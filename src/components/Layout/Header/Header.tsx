import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { useAppContext } from 'context/AppContext'
import { CategoryTypesEnum, FilterTypesEnum } from 'types'
import 'components/Layout/Header/Header.scss'

const Header = () => {
  const { currentCategory, setFilter } = useAppContext()
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  )

  const categoryTitle =
    CategoryTypesEnum[currentCategory] ?? CategoryTypesEnum.planets

  const availableFilter = [
    { value: '', label: 'Please select' },
    { value: FilterTypesEnum.crew, label: 'by crew' },
    { value: FilterTypesEnum.cargo_capacity, label: 'by cargo capacity' },
  ]
  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target
    if (value === 'crew' || value === 'cargo_capacity') setFilter(value)
    else setFilter(undefined)
    setSelectedOption(event.target.value)
  }

  return (
    <header className="header">
      <div className="header__contents">
        <h1>
          {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
        </h1>
        <nav className="header__contents--navigation">
          <ul>
            <li>
              <input placeholder="search..." />
            </li>
            <li>
              {currentCategory === CategoryTypesEnum.starships && (
                <>
                  <FontAwesomeIcon icon={faFilter} />
                  <select
                    value={selectedOption}
                    onChange={handleSelectionChange}
                  >
                    {availableFilter.map((optionFilter) => (
                      <option
                        key={optionFilter.value}
                        value={optionFilter.value}
                      >
                        {optionFilter.label}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
