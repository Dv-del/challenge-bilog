const initialState = {
  Data: [],
  Day: new Date('2021-09-16T00:00:00'),
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CALENDAR':
      return {
        ...state,
        Data: action.payload,
      }
    case 'PREVIOUS_DAY':
      const previousDate = state.Day.setDate(state.Day.getDate() - 1)
      return {
        ...state,
        Day: new Date(previousDate),
      }
    case 'NEXT_DAY':
      const nextDate = state.Day.setDate(state.Day.getDate() + 1)
      return {
        ...state,
        Day: new Date(nextDate),
      }
    case 'NOW_DAY':
      return {
        ...state,
        Day: new Date(),
      }
    default:
      return state
  }
}

export default rootReducer
