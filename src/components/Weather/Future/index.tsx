import { Box, Typography } from '@mui/material'
import { Weather } from '../../Types/types'
import { classes } from './style'

interface DaysFutureProps {
  weather: Weather
}

const DaysFuture: React.FC<DaysFutureProps> = ({ weather }) => {
  const formatDate = (dateString: string | any) => {
    const slashDate = dateString.replaceAll('-', '/')
    return new Date(slashDate)
  }
  const formatterDay = Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
  })
  return (
    <Box sx={classes.ContainerFuture}>
      {weather.forecast.forecastday.slice(1).map((future) => (
        <Box key={Math.random()} sx={classes.BoxFuture}>
          <Typography textTransform={'uppercase'}>
            {formatterDay.format(formatDate(future.date))}
          </Typography>
          <img src={future.day.condition.icon} alt="" />
          <Typography>{future.day.maxtemp_c}°C</Typography>
          <Typography>{future.day.mintemp_c}°C</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default DaysFuture
