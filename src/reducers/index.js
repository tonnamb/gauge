import { combineReducers } from 'redux'
import screenshots from './screenshotsReducer'
import webcam from './webcamReducer'

const rootReducer = combineReducers({
  screenshots,
  webcam
})

export default rootReducer
