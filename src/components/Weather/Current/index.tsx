import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Weather } from '../../Types/types'
import { Inupt, classes } from './style'
import getWeather from '../../../services/getAPI'
import DaysFuture from '../Future'

const Current = () => {
  const [locationCity, setLocantionCity] = useState<Weather>(Object)
  const [city, setCity] = useState<string>('')

  function weather(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    apiWeather(city)
    setCity('')
  }

  const apiWeather = async (location: string) => {
    const res = await getWeather({ location: location || city })
    setLocantionCity(res)
  }

  useEffect(() => {
    // Verifica se o navegador suporta geolocalização
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          apiWeather(`${latitude}, ${longitude}`)
        },
        (error) => {
          console.error('Erro ao obter localização:', error)
        }
      )
    } else {
      console.error('Geolocalização não suportada')
    }
  }, [])

  const date = new Date()
  const formatterDay = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  })

  const formatterHour = Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <Box sx={classes.Container}>
      <Box sx={classes.ContainerForm}>
        <form style={classes.Form} onSubmit={weather}>
          <Inupt
            type="text"
            placeholder="Digite a sua cidade..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={classes.Input}
          ></Inupt>
          <button style={classes.Button} type="submit">
            <SearchIcon sx={classes.IconSearch} />
          </button>
        </form>
      </Box>
      {locationCity && Object.keys(locationCity).length > 0 && (
        <Box sx={classes.MainInformation}>
          <Box sx={classes.Top}>
            <Typography variant="h4">{locationCity.location.name}</Typography>
            <Typography variant="h5">{formatterDay.format(date)}</Typography>
            <Typography variant="h4">{formatterHour.format(date)}</Typography>
            <Typography variant="h4">
              {locationCity.current.condition.text}
            </Typography>
            <img src={locationCity.current.condition.icon} />
          </Box>
          <Box sx={classes.Bottom}>
            <Typography variant="h2">
              {locationCity.current.temp_c}°C
            </Typography>
            <Box sx={classes.MaxMin}>
              <Typography variant="h6" key={Math.random()}>
                Max:{locationCity.forecast.forecastday[0].day.maxtemp_c}°C
              </Typography>
              <Typography variant="h6" key={Math.random()}>
                Min:{locationCity.forecast.forecastday[0].day.mintemp_c}°C
              </Typography>
            </Box>
          </Box>
          <Box sx={classes.Future}>
            <DaysFuture weather={locationCity} />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Current
