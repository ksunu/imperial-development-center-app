import { FC } from 'react'

import { Result, CategoryTypes } from 'types'
import { imageResolver } from 'utils/imageResolver'
import 'components/Card/Card.scss'

interface CardProps extends Result {
  type: CategoryTypes
}

const Card: FC<CardProps> = ({ type, name, uid, url }) => {
  return (
    <div className="card">
      <section className="card__image">
        <img src={imageResolver(type, name)} alt={`type`} />
      </section>
      <section className="card__content">
        <article className="card__content--title">{name}</article>
        <article className="card__content--description">
          <ul>
            <li>name: {name}</li>
            <li>uid: {uid}</li>
            <li>url: {url}</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Card
