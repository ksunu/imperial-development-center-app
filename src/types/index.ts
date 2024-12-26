export interface Result {
  uid: string
  name: string
  url: string
}
export interface PaginatedResponse {
  results: Result[]
}

export type CategoryTypes = 'planets' | 'starships' | 'people' | 'vehicles'

export enum CategoryTypesEnum {
  planets = 'planets',
  starships = 'starships',
  people = 'people',
  vehicles = 'vehicles',
}
