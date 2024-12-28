import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { AppContextProvider } from 'context/AppContext'
import HomePage from './HomePage'

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
          <HomePage />
        </MemoryRouter>
      </QueryClientProvider>
    </AppContextProvider>
  )
})

afterEach(() => cleanup())

test('renders loading state in HomePage initially', () => {
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('renders HomePage after successful fetch', async () => {
  await waitFor(() => screen.getByText('Tatooine'))
  expect(screen.getByText('Tatooine')).toBeInTheDocument()

  await waitFor(() => screen.getByText('desert'))
  expect(screen.getByText('desert')).toBeInTheDocument()
})
