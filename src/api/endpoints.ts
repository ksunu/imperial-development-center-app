import { baseUrl } from 'api/constants'
import { PaginatedResponse, ResultItemInfo } from 'types'

export const fetchPlanets = async (
  page: number
): Promise<PaginatedResponse> => {
  const response = await fetch(`${baseUrl}/planets?page=${page}&limit=12`)

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}

export const fetchStarships = async (
  page: number
): Promise<PaginatedResponse> => {
  const response = await fetch(`${baseUrl}/starships?page=${page}&limit=12`)

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}

export const fetchPeople = async (page: number): Promise<PaginatedResponse> => {
  const response = await fetch(`${baseUrl}/people?page=${page}&limit=12`)

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}

export const fetchVehicles = async (
  page: number
): Promise<PaginatedResponse> => {
  const response = await fetch(`${baseUrl}/vehicles?page=${page}&limit=12`)

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}

export const fetchUrl = async (url: string): Promise<ResultItemInfo> => {
  const response = await fetch(url)

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}
