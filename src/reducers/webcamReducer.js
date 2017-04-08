import { MOUNT_WEBCAM } from '../actions/types'

const webcamReducer = (state = null, action) => {
  switch (action.type) {
    case MOUNT_WEBCAM:
      return action.webcam
    default:
      return state
  }
}

export default webcamReducer
