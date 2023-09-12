import api from './api'

interface WeatherRequest {
  location: string
}

async function getWeather({ location }: WeatherRequest) {
  const key = process.env.KEY_API
  try {
    const locationApi = await api.get('forecast.json', {
      params: {
        key,
        q: location,
        days: 7,
        aqi: 'no',
        alerts: 'no',
        lang: 'pt',
      },
    })

    return locationApi.data
  } catch {
    alert('cidade nao encontrada')
    return
  }
}

export default getWeather
