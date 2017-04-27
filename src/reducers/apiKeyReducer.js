import { CHANGE_API_KEY } from '../actions/types'

const apiKeyReducer = (state = '886ff18f3a0b44588a9e3d10dba801ee', action) => {
  switch (action.type) {
    case CHANGE_API_KEY:
      return action.apiKey
    default:
      return state
  }
}

export default apiKeyReducer