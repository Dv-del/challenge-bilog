import moment from 'moment'
import { useSelector } from 'react-redux'

import { Typography } from '@mui/material'
import styles from './Divisor.module.scss'

const Divisors = ({ totalMinutes, totalMinutesPerDivisor }) => {
  const Data = useSelector(store => store.Data)
  const Day = useSelector(store => store.Day)

  const totalDivisors = totalMinutes / totalMinutesPerDivisor
  const divisors = []
  const times = []

  for (let i = 1; i < totalDivisors; i += 1) {
    const positionStyle = {
      top: `${i * totalMinutesPerDivisor}px`,
    }

    divisors.push(<div key={i} style={positionStyle} className={styles.calendar__divisor} />)
  }

  const totalMinutesPerTime = totalMinutesPerDivisor / 2
  const totalTimes = totalMinutes / totalMinutesPerTime
  for (let i = 0; i <= totalTimes; i += 1) {
    const positionStyle = {
      top: `${i * totalMinutesPerTime}px`,
      fontWeight: (i * totalMinutesPerTime) % totalMinutesPerDivisor === 0 ? 'bold' : 'regular',
    }

    const time = moment()
      .set('hour', 0)
      .set('minute', i * totalMinutesPerTime)
      .format('HH:mm a')

    times.push(
      <div key={i} style={positionStyle} className={styles.calendar__divisor__time}>
        {time}
        {Data?.map(value => {
          const fecha = new Date(value.fecha)
          if (fecha.getTime() !== Day.getTime()) return false
          if (value.id_agenda == -1 && value.hora === time.slice(0, 5))
            return <Typography sx={{ width: '300px', marginTop: '-17px', paddingRight: '10px', backgroundColor: 'green', color: 'white' }}>Turno disponible</Typography>
          if (value.hora === time.slice(0, 5))
            return (
              <Typography sx={{ width: '300px', marginTop: '-17px', paddingRight: '10px', backgroundColor: 'red', color: 'white' }} variant="body2">
                {value.ape_nom}
              </Typography>
            )
        })}
      </div>
    )
  }

  return (
    <div>
      {divisors}
      {times}
    </div>
  )
}

export default Divisors
