import { RECEIVE_EMOTIONS } from '../actions/types'
import shortid from 'shortid'

const screenshotsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EMOTIONS:
      return [ ...state, {
        id: shortid.generate(),
        emotions: action.emotions,
        receivedAt: action.receivedAt,
        src: action.screenshot }]
    default:
      return state
  }
}

export default screenshotsReducer
