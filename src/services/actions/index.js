import * as actionTypes from '../action-types'

import Axios from 'axios'

export const loadCalendar = async dispatch => {
  try {
    const result = await Axios.get('https://my-json-server.typicode.com/juanpernu/bilog-fe-challenge/schedule')
    return dispatch({
      type: actionTypes.LOAD_CALENDAR,
      payload: result.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const beforeDay = dispatch => {
  return dispatch({
    type: actionTypes.BEFORE_DAY,
  })
}

export const nextDay = dispatch => {
  return dispatch({
    type: actionTypes.NEXT_DAY,
  })
}

export const nowDay = dispatch => {
  return dispatch({
    type: actionTypes.NOW_DAY,
  })
}
