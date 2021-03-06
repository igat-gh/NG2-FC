export type Lang = "ru" | "en"
export type Units = "metric" | "imperial" | "standard"
export type UrlParams = CitiesInCycleOptions

export interface WeatherState {
  loading: boolean,
  error?: Error,
  entities: CityWeather[]
}

export interface CityWeather {
  name: string,
  temp: number,
  icon: string,
  wind: { deg: number, speed: number },
  coords: { latitude: number, longitude: number }
}

export interface CityWeatherItem {
  clouds: { all: number },
  wind: { deg: number, speed: number },
  sys: { country: string }
  coord: { lat: number, lon: number },
  main: {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  },
  weather: {
    description: string,
    icon: string,
    main: string,
    id: number
  }[],
  name: string,
  dt: number,
  id: number
}

export interface OWResponse {
  cod: string,
  count: number,
  message: string,
  list: CityWeatherItem[]
}

export interface BaseOptions {
  lang?: Lang,
  units?: Units,
  [key: string]: number | string
}

export interface CitiesInCycleOptions extends BaseOptions {
  lat: number,
  lon: number,
  cnt?: number,
}
