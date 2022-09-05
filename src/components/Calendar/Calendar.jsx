import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Divisors from '../Divisors/Divisors'

import { loadCalendar, previousDay, nextDay, nowDay } from '../../services/actions'

import { Stack, IconButton, Button, Typography, Divider, Chip, Tooltip } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import styles from './Calendar.module.scss'

function Calendar() {
  const dispatch = useDispatch()
  const Day = useSelector(store => store.Day)

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const totalMinutesPerDivisor = 60
  const totalMinutes = totalMinutesPerDivisor * 24

  useEffect(() => {
    loadCalendar(dispatch)
  }, [dispatch])

  const handleClickNow = () => {
    nowDay(dispatch)
  }

  const handleClickPrevious = () => {
    previousDay(dispatch)
  }

  const handleClickNext = () => {
    nextDay(dispatch)
  }

  return (
    <Stack className={styles.box}>
      <Typography variant="h2">Calendar</Typography>
      <Stack direction="row" margin={2} spacing={2} alignItems="center">
        <Tooltip title="Current day">
          <Button variant="outlined" onClick={handleClickNow}>
            Now
          </Button>
        </Tooltip>
        <Tooltip title="Previous day">
          <IconButton onClick={handleClickPrevious}>
            <NavigateBeforeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next day">
          <IconButton onClick={handleClickNext}>
            <NavigateNextIcon />
          </IconButton>
        </Tooltip>
        <Typography variant="h5">{`${Day.getDate()} de ${monthNames[Day.getMonth()]} ${Day.getYear() + 1900}`}</Typography>
      </Stack>
      <Divider>
        <Chip label={`${Day.toLocaleDateString('en-US', { weekday: 'long' })} ${Day.getDate()}`} />
      </Divider>
      <Stack className={styles.box_hours} sx={{ height: `${totalMinutes}px` }}>
        <Divisors totalMinutes={totalMinutes} totalMinutesPerDivisor={totalMinutesPerDivisor} />
      </Stack>
    </Stack>
  )
}

export default Calendar
