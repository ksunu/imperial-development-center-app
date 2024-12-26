import { CategoryTypes, CategoryTypesEnum } from 'types'

export const imageResolver = (type: CategoryTypes, name: string) => {
  const nameFormat = name.toLocaleLowerCase()
  switch (type) {
    case CategoryTypesEnum.planets:
      const planetJpg = ['alderaan', 'dagobah', 'kamino']
      return `assets/${CategoryTypesEnum.planets}/${nameFormat}.${
        planetJpg.includes(nameFormat) ? 'jpg' : 'png'
      }`
    case CategoryTypesEnum.people:
      return ''
    case CategoryTypesEnum.starships:
      const nameFormatNoSpace = nameFormat.split(' ').join()
      const starShipJpg = ['rebeltransport']
      return `assets/${CategoryTypesEnum.starships}/${nameFormatNoSpace}.${
        starShipJpg.includes(nameFormatNoSpace) ? 'jpg' : 'png'
      }`
    case CategoryTypesEnum.vehicles:
      return ''
    default:
      return 'assets/default/no-image.jpeg'
  }
}
