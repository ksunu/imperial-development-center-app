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
      return 'assets/default/no-image.jpeg'
    case CategoryTypesEnum.starships:
      const nameFormatNoSpace = nameFormat.split(' ').join()
      const starShipJpg = ['rebeltransport']
      return `assets/${CategoryTypesEnum.starships}/${nameFormatNoSpace}.${
        starShipJpg.includes(nameFormatNoSpace) ? 'jpg' : 'png'
      }`
    case CategoryTypesEnum.vehicles:
      const peopleJpg = ['at-st', 'sandcrawler', 'x-34landspeeder']
      const vehicleRemoveChar = nameFormat.replace('/', '')
      const vehicleRemoveSpace = vehicleRemoveChar.split(' ').join()
      return `assets/${CategoryTypesEnum.vehicles}/${vehicleRemoveSpace}.${
        peopleJpg.includes(vehicleRemoveSpace) ? 'jpg' : 'png'
      }`
    default:
      return 'assets/default/no-image.jpeg'
  }
}
