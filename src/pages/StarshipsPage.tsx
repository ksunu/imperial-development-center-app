import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchStarships } from 'api/endpoints'
import Layout from 'components/Layout/Layout'
import { queryKeys } from 'react-query/constants'
import { PaginatedResponse, Result } from 'types'
import Card from 'components/Card/Card'

const StarshipsPage = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, error } = useQuery<
    PaginatedResponse,
    Error
  >({
    queryKey: [queryKeys.starships, page],
    queryFn: () => fetchStarships(page),
    keepPreviousData: true,
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  return (
    <Layout>
      <div className="starships-container">
        {data.results.map((starship: Result) => (
          <Card
            key={starship.name}
            type="starships"
            name={starship.name}
            uid={starship.uid}
            url={starship.url}
          />
        ))}
      </div>
    </Layout>
  )
}

export default StarshipsPage
