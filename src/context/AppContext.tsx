import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import {
  CategoryTypes,
  CategoryTypesEnum,
  FilterTypes,
  FilterTypesEnum,
  ResultsInfo,
} from 'types'

interface AppContextProps {
  currentCategory: CategoryTypes
  setCurrentCategory: Dispatch<SetStateAction<CategoryTypes>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  resultsInfo?: ResultsInfo
  setResultsInfo: Dispatch<SetStateAction<ResultsInfo | undefined>>
  filter?: string
  setFilter: Dispatch<SetStateAction<string | undefined>>
  filterOrder?: FilterTypes
  setFilterOrder: Dispatch<SetStateAction<FilterTypes | undefined>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentCategory, setCurrentCategory] = useState<CategoryTypes>(
    CategoryTypesEnum.planets
  )
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [resultsInfo, setResultsInfo] = useState<ResultsInfo | undefined>(
    undefined
  )
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const [filterOrder, setFilterOrder] = useState<FilterTypes | undefined>(
    undefined
  )

  useEffect(() => {
    setCurrentPage(1)
    setResultsInfo(undefined)
    setFilterOrder(undefined)
    setFilter(undefined)
  }, [currentCategory])

  return (
    <AppContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        currentPage,
        setCurrentPage,
        resultsInfo,
        setResultsInfo,
        filter,
        setFilter,
        filterOrder,
        setFilterOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context)
    throw new Error('useAppContext must be used within a AppContextProvider')
  return context
}
