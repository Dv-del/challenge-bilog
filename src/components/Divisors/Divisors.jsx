import moment from 'moment'
import { useSelector } from 'react-redux'

import { Stack, Typography } from '@mui/material'

import styles from './Divisors.module.scss'

const Divisors = ({ totalMinutes, totalMinutesPerDivisor }) => {
  const Data = useSelector(store => store.Data)
  const Day = useSelector(store => store.Day)

  const totalDivisors = totalMinutes / totalMinutesPerDivisor

  const divisors = []
  const times = []

  for (let i = 1; i < totalDivisors; i += 1) {
    divisors.push(<div key={i} style={{ top: `${i * totalMinutesPerDivisor}px` }} className={styles.divisor} />)
  }

  const totalMinutesPerTime = totalMinutesPerDivisor / 2
  const totalTimes = totalMinutes / totalMinutesPerTime

  for (let i = 0; i <= totalTimes; i += 1) {
    const divisorStyle = {
      top: `${i * totalMinutesPerTime}px`,
      fontWeight: (i * totalMinutesPerTime) % totalMinutesPerDivisor === 0 ? 'bold' : 'regular',
    }

    const formatTime = moment()
      .set('hour', 0)
      .set('minute', i * totalMinutesPerTime)
      .format('HH:mm a')

    times.push(
      <Typography style={divisorStyle} className={styles.box_time}>
        {formatTime}
        {Data &&
          Data.map(value => {
            const fecha = new Date(value.fecha)
            if (fecha.getTime() !== Day.getTime()) return false

            if (value.id_agenda === -1 && value.hora === formatTime.slice(0, 5))
              return (
                <Typography className={`${styles.time} + ${styles.active}`} variant="body2">
                  Turno disponible
                </Typography>
              )

            if (value.hora === formatTime.slice(0, 5))
              return (
                <Typography className={styles.time} variant="body2">
                  {value.ape_nom}
                </Typography>
              )
          })}
      </Typography>
    )
  }

  return (
    <Stack className={styles.box}>
      {divisors}
      {times}
    </Stack>
  )
}

export default Divisors
