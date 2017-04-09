import { PROPAGATE_TIME } from '../actions/types'

const timeReducer = (state = 0, action) => {
  switch (action.type) {
    case PROPAGATE_TIME:
      return state + 1
    default:
      return state
  }
}

export default timeReducer
