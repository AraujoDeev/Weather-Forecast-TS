export type Location = {
  name: string
  country: string
}

export type Current = {
  temp_c: number
  condition: {
    text: string
    icon: string
  }
}

export type Forecast = {
  forecastday: ForecastDay[]
}

interface ForecastDay {
  date: string
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalsnow_cm: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: {
      text: string
      icon: string
      code: number
    }
    uv: number
  }
  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
    is_moon_up: number
    is_sun_up: number
  }
}

export interface Weather {
  location: Location
  current: Current
  forecast: Forecast
}
