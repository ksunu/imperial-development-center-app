import { http, HttpResponse } from 'msw'
import { baseUrl } from 'api/constants'

export const handlers = [
  /** HOMEPAGE */
  http.get(`${baseUrl}/planets?page=1&limit=12`, () => {
    return HttpResponse.json({
      total_records: 60,
      total_pages: 6,
      previous: null,
      next: 'https://swapi.tech/api/planets?page=2&limit=10',
      results: [
        {
          uid: '1',
          name: 'Tatooine',
          url: 'https://www.swapi.tech/api/planets/1',
        },
        {
          uid: '2',
          name: 'Alderaan',
          url: 'https://www.swapi.tech/api/planets/2',
        },
        {
          uid: '3',
          name: 'Yavin IV',
          url: 'https://www.swapi.tech/api/planets/3',
        },
      ],
    })
  }),

  http.get(`${baseUrl}/planets/1`, () => {
    return HttpResponse.json({
      message: 'ok',
      result: {
        properties: {
          diameter: '10465',
          rotation_period: '23',
          orbital_period: '304',
          gravity: '1 standard',
          population: '200000',
          climate: 'arid',
          terrain: 'desert',
          surface_water: '1',
          created: '2024-12-27T20:40:22.731Z',
          edited: '2024-12-27T20:40:22.731Z',
          name: 'Tatooine',
          url: 'https://www.swapi.tech/api/planets/1',
        },
        description: 'A planet.',
        _id: '5f7254c11b7dfa00041c6fae',
        uid: '1',
        __v: 0,
      },
    })
  }),
  /** PEOPLEPAGE */
  http.get(`${baseUrl}/people?page=1&limit=12`, () => {
    return HttpResponse.json({
      message: 'ok',
      total_records: 82,
      total_pages: 9,
      previous: null,
      next: 'https://swapi.tech/api/people?page=2&limit=10',
      results: [
        {
          uid: '1',
          name: 'Luke Skywalker',
          url: 'https://www.swapi.tech/api/people/1',
        },
        {
          uid: '2',
          name: 'C-3PO',
          url: 'https://www.swapi.tech/api/people/2',
        },
        {
          uid: '3',
          name: 'R2-D2',
          url: 'https://www.swapi.tech/api/people/3',
        },
      ],
    })
  }),

  http.get(`${baseUrl}/people/1`, () => {
    return HttpResponse.json({
      message: 'ok',
      result: {
        properties: {
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          created: '2024-12-27T20:40:22.728Z',
          edited: '2024-12-27T20:40:22.728Z',
          name: 'Luke Skywalker',
          homeworld: 'https://www.swapi.tech/api/planets/1',
          url: 'https://www.swapi.tech/api/people/1',
        },
        description: 'A person within the Star Wars universe',
        _id: '5f63a36eee9fd7000499be42',
        uid: '1',
        __v: 0,
      },
    })
  }),

  /** STARSHIPSPAGE */
  http.get(`${baseUrl}/starships?page=1&limit=12`, () => {
    return HttpResponse.json({
      message: 'ok',
      total_records: 36,
      total_pages: 4,
      previous: null,
      next: 'https://swapi.tech/api/starships?page=2&limit=10',
      results: [
        {
          uid: '2',
          name: 'CR90 corvette',
          url: 'https://www.swapi.tech/api/starships/2',
        },
        {
          uid: '3',
          name: 'Star Destroyer',
          url: 'https://www.swapi.tech/api/starships/3',
        },
        {
          uid: '5',
          name: 'Sentinel-class landing craft',
          url: 'https://www.swapi.tech/api/starships/5',
        },
      ],
    })
  }),

  http.get(`${baseUrl}/starships/2`, () => {
    return HttpResponse.json({
      message: 'ok',
      result: {
        properties: {
          model: 'CR90 corvette',
          starship_class: 'corvette',
          manufacturer: 'Corellian Engineering Corporation',
          cost_in_credits: '3500000',
          length: '150',
          crew: '30-165',
          passengers: '600',
          max_atmosphering_speed: '950',
          hyperdrive_rating: '2.0',
          MGLT: '60',
          cargo_capacity: '3000000',
          consumables: '1 year',
          pilots: [],
          created: '2020-09-17T17:55:06.604Z',
          edited: '2020-09-17T17:55:06.604Z',
          name: 'CR90 corvette',
          url: 'https://www.swapi.tech/api/starships/2',
        },
        description: 'A Starship',
        _id: '5f63a34fee9fd7000499be1e',
        uid: '2',
        __v: 0,
      },
    })
  }),
  /** VEHICLESPAGE */
  http.get(`${baseUrl}/vehicles?page=1&limit=12`, () => {
    return HttpResponse.json({
      message: 'ok',
      total_records: 39,
      total_pages: 4,
      previous: null,
      next: 'https://swapi.tech/api/vehicles?page=2&limit=10',
      results: [
        {
          uid: '4',
          name: 'Sand Crawler',
          url: 'https://www.swapi.tech/api/vehicles/4',
        },
        {
          uid: '7',
          name: 'X-34 landspeeder',
          url: 'https://www.swapi.tech/api/vehicles/7',
        },
        {
          uid: '6',
          name: 'T-16 skyhopper',
          url: 'https://www.swapi.tech/api/vehicles/6',
        },
        ,
      ],
    })
  }),

  http.get(`${baseUrl}/vehicles/4`, () => {
    return HttpResponse.json({
      message: 'ok',
      result: {
        properties: {
          model: 'Digger Crawler',
          vehicle_class: 'wheeled',
          manufacturer: 'Corellia Mining Corporation',
          cost_in_credits: '150000',
          length: '36.8 ',
          crew: '46',
          passengers: '30',
          max_atmosphering_speed: '30',
          cargo_capacity: '50000',
          consumables: '2 months',
          films: [],
          pilots: [],
          created: '2020-09-17T17:46:31.415Z',
          edited: '2020-09-17T17:46:31.415Z',
          name: 'Sand Crawler',
          url: 'https://www.swapi.tech/api/vehicles/4',
        },
        description: 'A vehicle',
        _id: '5f63a160cf50d100047f97fc',
        uid: '4',
        __v: 0,
      },
    })
  }),
]
