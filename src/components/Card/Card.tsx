import { FC, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'

import { queryKeys } from 'react-query/constants'
import { fetchUrl } from 'api/endpoints'
import { Result, CategoryTypes, ResultItemInfo, CategoryTypesEnum } from 'types'
import { imageResolver } from 'utils/imageResolver'
import { cardDataBeautifier } from 'utils/cardDataBeautifier'
import 'components/Card/Card.scss'

interface CardProps extends Result {
  type: CategoryTypes
  newData?: ResultItemInfo['result']
}

const Card: FC<CardProps> = ({ type, name, uid, url, newData }) => {
  const { data, isLoading, isError, error } = useQuery<ResultItemInfo, Error>({
    queryKey: [queryKeys.item, type, uid],
    queryFn: () => fetchUrl(url),
    keepPreviousData: true,
    enabled: type !== CategoryTypesEnum.starships,
  })

  const dataFormat = useCallback(() => {
    if (isLoading && !newData) return <span>Content loading...</span>
    if (data || newData) {
      const dataToHandle = data ? data.result : newData
      const cardInfo = cardDataBeautifier(type, dataToHandle)
      return (
        <>
          <span>{cardInfo?.infoOne}</span>
          <span>{cardInfo?.infoTwo}</span>
        </>
      )
    }
  }, [data])

  const handleImageError = (e: any) => {
    e.target.src = 'assets/default/no-image.jpeg'
  }

  return (
    <div className="card">
      <section className="card__image">
        <img
          src={imageResolver(type, name)}
          onError={handleImageError}
          alt={name}
        />
      </section>
      <section className="card__content">
        <article className="card__content--title">{name}</article>
        <article className="card__content--description">{dataFormat()}</article>
      </section>
    </div>
  )
}

export default Card
