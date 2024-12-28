import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { AppContextProvider } from 'context/AppContext'
import VehiclesPage from 'pages/VehiclesPage'

beforeEach(() => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  render(
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          <VehiclesPage />
        </MemoryRouter>
      </QueryClientProvider>
    </AppContextProvider>
  )
})

afterEach(() => cleanup())

test('renders loading state in VehiclesPage initially', () => {
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})
