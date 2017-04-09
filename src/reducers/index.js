import { combineReducers } from 'redux'
import screenshots from './screenshotsReducer'
import webcam from './webcamReducer'
import time from './timeReducer'
import speech from './speechReducer'

const rootReducer = combineReducers({
  screenshots,
  webcam,
  time,
  speech
})

export default rootReducer
