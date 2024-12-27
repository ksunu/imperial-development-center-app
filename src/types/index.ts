/** Result */
export interface Result {
  uid: string
  name: string
  url: string
  description?: string
  properties?: any
}
export interface PaginatedResponse {
  results: Result[]
  total_pages: number
  total_records: number
}

export interface ResultsInfo {
  totalPages: number
  totalRecords: number
}

export interface ResultItemInfo {
  result: {
    uid: string
    properties: {
      name?: string
      diameter?: string
      rotation_period?: string
      orbital_period?: string
      gravity?: string
      population?: string
      climate?: string
      terrain?: string
      surface_water?: string
      model?: string
      starship_class?: string
      manufacturer?: string
      cost_in_credits?: string
      length?: string
      crew?: string
      passengers?: string
      max_atmosphering_speed?: string
      hyperdrive_rating?: string
      MGLT?: string
      cargo_capacity?: string
      consumables?: string
      height?: string
      hair_color?: string
      skin_color?: string
      eye_color?: string
      birth_year?: string
      gender?: string
      vehicle_class?: string
      url?: string
    }
    description: string
  }
}

/** Category */
export type CategoryTypes = 'planets' | 'starships' | 'people' | 'vehicles'

export enum CategoryTypesEnum {
  planets = 'planets',
  starships = 'starships',
  people = 'people',
  vehicles = 'vehicles',
}

/** Filter */
export enum FilterTypesEnum {
  crew = 'crew',
  cargo_capacity = 'cargo_capacity',
}
