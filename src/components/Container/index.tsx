import { Box } from '@mui/material'
import Current from '../Weather/Current'
import CarouselComponent from '../Carousel'
import { classes } from './style'
import bg from '../../assets/img/bg.jpg'
import { BgImage } from '../../App'

const Container = () => {
  let width = window.screen.width
  console.log(width)
  return (
    <Box sx={classes.Container}>
      <BgImage src={bg}></BgImage>
      <div></div>
      <CarouselComponent />
      <Current />
    </Box>
  )
}

export default Container
