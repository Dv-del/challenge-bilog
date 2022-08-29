import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadCalendar, beforeDay, nextDay, nowDay } from './services/actions'

import Calendar from './containers/Calendar'

import IconButton from '@mui/material/IconButton'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

import './App.css'

function App() {
  const dispatch = useDispatch()

  const day = useSelector(store => store.Day)

  useEffect(() => {
    dispatch(loadCalendar())
  }, [dispatch])

  const styleBox = {
    width: '800px',
    height: '100vh',
    margin: 'auto',
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const handleClickNow = event => {
    dispatch(nowDay())
  }

  const handleClickBefore = event => {
    dispatch(beforeDay())
  }

  const handleClickNext = event => {
    dispatch(nextDay())
  }

  return (
    <Box sx={styleBox}>
      <Stack>
        <Typography variant="h2">Calendar</Typography>
        <Stack direction="row" margin={5} spacing={2} alignItems="center">
          <Button variant="outlined" onClick={handleClickNow}>
            Hoy
          </Button>
          <IconButton aria-label="before" onClick={handleClickBefore}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton aria-label="next" onClick={handleClickNext}>
            <NavigateNextIcon />
          </IconButton>
          <Typography variant="h5">{`${day.getDate()} de ${monthNames[day.getMonth()]} ${day.getYear() + 1900}`}</Typography>
        </Stack>
        <Stack spacing={2}>
          <Divider>
            <Chip label={`${day.toLocaleDateString('en-US', { weekday: 'long' })} ${day.getDate()}`} />
          </Divider>
          <Stack>
            <Calendar />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default App
