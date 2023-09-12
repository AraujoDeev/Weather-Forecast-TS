import { Box } from '@mui/material'
import Current from '../Weather/Current'
import CarouselComponent from '../Carousel'
import { classes } from './style'
import bg from '../../assets/img/bg.jpg'

const Container = () => {
  return (
    <Box sx={classes.Container}>
      <img
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '100%',
          filter: 'blur(50px)',
        }}
        src={bg}
      />
      <div></div>
      <CarouselComponent />
      <Current />
    </Box>
  )
}

export default Container
