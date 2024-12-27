import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useAppContext } from 'context/AppContext'
import { fetchStarships, fetchUrl } from 'api/endpoints'
import { queryKeys } from 'react-query/constants'
import {
  FilterTypesEnum,
  PaginatedResponse,
  Result,
  ResultItemInfo,
} from 'types'
import Layout from 'components/Layout/Layout'
import Card from 'components/Card/Card'
import 'pages/StarshipsPage.scss'
import { cardDataBeautifier } from 'utils/cardDataBeautifier'

const StarshipsPage = () => {
  const { currentPage, setResultsInfo, filter } = useAppContext()
  const [currentResults, setCurrentResults] = useState<any[]>([])
  const { data, isLoading, isError, error } = useQuery<
    PaginatedResponse,
    Error
  >({
    queryKey: [queryKeys.starships, currentPage],
    queryFn: () => fetchStarships(currentPage),
    keepPreviousData: true,
  })

  const handleEachData: any = async (dataInfo: any) => {
    let result
    try {
      await fetchUrl(dataInfo.url).then((d) => (result = d.result))
      return result
    } catch (err) {
      console.error(err)
    }
  }

  const updateResultInfo = useCallback(async () => {
    const actions: Promise<any>[] = []
    let newData: any[] = []

    if (data) {
      setResultsInfo({
        totalPages: data.total_pages,
        totalRecords: data.total_records,
      })
      data.results.forEach((d) => actions.push(handleEachData(d)))
      await Promise.all(actions).then((r) => {
        newData = data.results.map((d) => {
          const extraInfoData = r.find((e) => e.uid === d.uid)
          return {
            ...d,
            ...extraInfoData,
          }
        })
      })

      setCurrentResults(newData)
    }
  }, [data, handleEachData])

  useEffect(() => {
    updateResultInfo()
  }, [data])

  useEffect(() => {
    if (filter && currentResults.length) {
      if (filter === FilterTypesEnum.crew) {
        const currentResultsCopy = [...currentResults]
        const sorted = currentResultsCopy.sort((a: any, b: any) => {
          const splitNumber = (crewNum: string) => {
            const numReplace = crewNum.replace(',', '')
            const numSplit = numReplace.split('-')
            return Number(numSplit[0])
          }
          return splitNumber(a.properties.crew) - splitNumber(b.properties.crew)
        })
        setCurrentResults(sorted)
      }
    }
  }, [filter, currentResults])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>

  return (
    <Layout>
      <div className="starships-container">
        {currentResults.map((starship: ResultItemInfo['result']) => (
          <Card
            key={starship.uid}
            type="starships"
            name={starship.properties.name ?? ''}
            uid={starship.uid}
            url={starship.properties.url ?? ''}
            newData={starship}
          />
        ))}
      </div>
    </Layout>
  )
}

export default StarshipsPage
