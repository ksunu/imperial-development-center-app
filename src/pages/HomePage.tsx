import { FC, useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useAppContext } from 'context/AppContext'
import { fetchPlanets } from 'api/endpoints'
import { queryKeys } from 'react-query/constants'
import { PaginatedResponse, Result } from 'types'
import Layout from 'components/Layout/Layout'
import Card from 'components/Card/Card'
import Spinner from 'components/ui/Spinner'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { currentPage, setResultsInfo } = useAppContext()

  const { data, isLoading, isError, error } = useQuery<
    PaginatedResponse,
    Error
  >({
    queryKey: [queryKeys.planets, currentPage],
    queryFn: () => fetchPlanets(currentPage),
    keepPreviousData: true,
  })

  const updateResultInfo = useCallback(() => {
    if (data)
      setResultsInfo({
        totalPages: data.total_pages,
        totalRecords: data.total_records,
      })
  }, [data])

  useEffect(() => {
    updateResultInfo()
  }, [data])

  if (isLoading) return <Spinner />
  if (isError) return <div>Error: {error?.message}</div>

  return (
    <Layout>
      <div className="page-container">
        {data.results.map((planet: Result) => (
          <Card
            key={planet.name}
            type="planets"
            name={planet.name}
            uid={planet.uid}
            url={planet.url}
          />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
