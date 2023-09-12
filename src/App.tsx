import './App.css'
import '../src/styles/global.css'
import Container from './components/Container'
import { Box } from '@mui/material'
import { classes } from './App'

function App() {
  return (
    <Box sx={classes.Container}>
      <Container />
    </Box>
  )
}

export default App
