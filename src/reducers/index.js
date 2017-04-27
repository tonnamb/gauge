import { combineReducers } from 'redux'
import screenshots from './screenshotsReducer'
import webcam from './webcamReducer'
import time from './timeReducer'
import speech from './speechReducer'
import apiKey from './apiKeyReducer'

const rootReducer = combineReducers({
  screenshots,
  webcam,
  time,
  speech,
  apiKey
})

export default rootReducer
