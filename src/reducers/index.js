import { combineReducers } from 'redux'
import screenshots from './screenshotsReducer'
import webcam from './webcamReducer'
import time from './timeReducer'

const rootReducer = combineReducers({
  screenshots,
  webcam,
  time
})

export default rootReducer
