import * as actionTypes from '../action-types'

import Axios from 'axios'

export const loadCalendar = () => {
  try {
    const result = Axios.get('https://my-json-server.typicode.com/juanpernu/bilog-fe-challenge/schedule')
    return {
      type: actionTypes.LOAD_CALENDAR,
      payload: result,
    }
  } catch (error) {
    console.log(error)
  }
}

export const beforeDay = () => {
  return {
    type: actionTypes.BEFORE_DAY,
  }
}

export const nextDay = () => {
  return {
    type: actionTypes.NEXT_DAY,
  }
}

export const nowDay = () => {
  return {
    type: actionTypes.NOW_DAY,
  }
}
