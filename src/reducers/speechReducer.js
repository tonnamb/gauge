import { RECEIVE_SPEECH } from '../actions/types'
import shortid from 'shortid'

const speechReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SPEECH:
      return [ ...state, {
        id: shortid.generate(),
        text: action.text }]
    default:
      return state
  }
}

export default speechReducer
