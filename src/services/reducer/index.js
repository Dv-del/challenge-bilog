const initialState = {
  Data: [],
  Day: new Date(),
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CALENDAR':
      return {
        ...state,
        Data: action.payload,
      }
    case 'BEFORE_DAY':
      const beforeDate = state.Day.setDate(state.Day.getDate() - 1)
      return {
        ...state,
        Day: new Date(beforeDate),
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
