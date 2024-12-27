import { CategoryTypes, CategoryTypesEnum, ResultItemInfo } from 'types'

const numberBeautifier = (qty?: string) => {
  const total = Number(qty)
  if (total > 999999999) return `${(total / 1000000000).toFixed(0)}B`
  if (total > 999999) return `${(total / 1000000).toFixed(0)}M`
  if (total > 999) return `${(total / 1000).toFixed(0)}k`
  if (total < 1000) return `${(total / 1000).toFixed(2)}`
}

export const cardDataBeautifier = (
  type: CategoryTypes,
  data: ResultItemInfo['result']
) => {
  if (data) {
    let popUpInfo
    const { properties } = data

    switch (type) {
      case CategoryTypesEnum.planets:
        popUpInfo = [
          { name: properties.name },
          { diameter: properties.diameter },
          { rotation_period: properties.rotation_period },
          { orbital_period: properties.orbital_period },
          { gravity: properties.gravity },
          { population: properties.population },
          { climate: properties.climate },
          { terrain: properties.terrain },
          { surface_water: properties.surface_water },
        ]
        return {
          popUpInfo,
          infoOne: properties.terrain,
          infoTwo: `Population of ${numberBeautifier(properties.population)}`,
        }
      case CategoryTypesEnum.starships:
        popUpInfo = [
          { name: properties.name },
          { model: properties.model },
          { starship_class: properties.starship_class },
          { orbitamanufacturerl_period: properties.manufacturer },
          { cost_in_credits: properties.cost_in_credits },
          { length: properties.length },
          { crew: properties.crew },
          { passengers: properties.passengers },
          { max_atmosphering_speed: properties.max_atmosphering_speed },
          { hyperdrive_rating: properties.hyperdrive_rating },
          { MGLT: properties.MGLT },
          { cargo_capacity: properties.cargo_capacity },
          { consumables: properties.consumables },
        ]
        return {
          popUpInfo,
          infoOne: properties.crew,
          infoTwo: `Cargo Capacity of ${numberBeautifier(
            properties.cargo_capacity
          )}`,
        }
      case CategoryTypesEnum.people:
        popUpInfo = [
          { name: properties.name },
          { height: properties.height },
          { hair_color: properties.hair_color },
          { skin_color: properties.skin_color },
          { eye_color: properties.eye_color },
          { birth_year: properties.birth_year },
          { gender: properties.gender },
        ]
        return {
          popUpInfo,
          infoOne: `Gender: ${properties.gender}`,
          infoTwo: `Born on ${properties.birth_year}`,
        }
      case CategoryTypesEnum.vehicles:
        popUpInfo = [
          { name: properties.name },
          { vehicle_class: properties.vehicle_class },
          { manufacturer: properties.manufacturer },
          { cost_in_credits: properties.cost_in_credits },
          { length: properties.length },
          { crew: properties.crew },
          { passengers: properties.passengers },
          { max_atmosphering_speed: properties.max_atmosphering_speed },
          { cargo_capacity: properties.cargo_capacity },
          { consumables: properties.consumables },
        ]

        return {
          popUpInfo,
          infoOne: properties.manufacturer,
          infoTwo: `Cargo capacity of ${properties.cargo_capacity}`,
        }
    }
  }
}
