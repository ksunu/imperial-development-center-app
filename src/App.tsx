import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppContextProvider } from 'context/AppContext'
import HomePage from 'pages/HomePage'
import StarshipsPage from 'pages/StarshipsPage'
import 'styles/styles.scss'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/starships" element={<StarshipsPage />} />
        </Routes>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default App
