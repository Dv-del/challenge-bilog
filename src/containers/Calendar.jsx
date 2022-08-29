import Divisor from '../components/Divisor.jsx'

import { Stack } from '@mui/system'
import { useSelector } from 'react-redux'

function Calendar() {
  const totalMinutesPerDivisor = 60
  const totalMinutes = totalMinutesPerDivisor * 23

  const styles = {
    height: `${totalMinutes}px`,
    position: 'relative',
    marginLeft: '50px',
    border: '1px solid #ececec',
  }

  return (
    <Stack sx={styles}>
      <Divisor totalMinutes={totalMinutes} totalMinutesPerDivisor={totalMinutesPerDivisor} />
    </Stack>
  )
}

export default Calendar
