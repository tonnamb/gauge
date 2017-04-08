import * as types from './types'
import oxford from 'project-oxford'

const API_KEY = '886ff18f3a0b44588a9e3d10dba801ee'

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

export const fetchEmotions = (screenshot) => {
  return (dispatch) => {
    dispatch(requestEmotions(screenshot))
    const client = new oxford.Client(API_KEY)
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
