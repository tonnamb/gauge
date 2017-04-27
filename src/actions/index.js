import * as types from './types'
import oxford from 'project-oxford'

export const requestEmotions = (screenshot) => {
  console.log('Requesting emotions')
  return {
    type: types.REQUEST_EMOTIONS,
    screenshot
  }
}

export const receiveEmotions = (screenshot, response) => {
  return {
    type: types.RECEIVE_EMOTIONS,
    screenshot,
    emotions: response,
    receivedAt: Date.now()
  }
}

export const fetchEmotions = (webcam, apiKey) => {
  return (dispatch) => {
    const screenshot = webcam.getScreenshot()
    dispatch(requestEmotions(screenshot))
    const client = new oxford.Client(apiKey)
    return client.emotion.analyzeEmotion({ data: oxford.makeBuffer(screenshot) })
    .then(response => {
      dispatch(receiveEmotions(screenshot, response))
      console.log(response)
    })
  }
}

export const mountWebcam = (webcam) => {
  return {
    type: types.MOUNT_WEBCAM,
    webcam
  }
}

export const propagateTime = () => {
  return {
    type: types.PROPAGATE_TIME
  }
}

export const receiveSpeech = (text) => {
  return {
    type: types.RECEIVE_SPEECH,
    text
  }
}

export const changeApiKey = (apiKey) => {
  return {
    type: types.CHANGE_API_KEY,
    apiKey
  }
}