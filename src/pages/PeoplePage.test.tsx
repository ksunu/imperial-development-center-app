import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { AppContextProvider } from 'context/AppContext'
import PeoplePage from 'pages/PeoplePage'

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
          <PeoplePage />
        </MemoryRouter>
      </QueryClientProvider>
    </AppContextProvider>
  )
})

afterEach(() => cleanup())

test('renders loading state in PeoplePage initially', () => {
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('renders PeoplePage after successful fetch', async () => {
  await waitFor(() => screen.getByText('Luke Skywalker'))
  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()

  await waitFor(() => screen.getByText('Born on 19BBY'))
  expect(screen.getByText('Born on 19BBY')).toBeInTheDocument()
})
