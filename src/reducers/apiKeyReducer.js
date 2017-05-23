import { CHANGE_API_KEY } from '../actions/types'

const apiKeyReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_API_KEY:
      return action.apiKey
    default:
      return state
  }
}

export default apiKeyReducer