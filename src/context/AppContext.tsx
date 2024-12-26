import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from 'react'
import { CategoryTypes } from 'types'

interface AppContextProps {
  currentCategory: CategoryTypes
  setCurrentCategory: Dispatch<SetStateAction<CategoryTypes>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryTypes>('planets')

  return (
    <AppContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
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
