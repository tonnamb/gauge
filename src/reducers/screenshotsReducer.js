import { SAVE_SCREENSHOT } from '../actions/types'
import shortid from 'shortid'
import oxford from 'project-oxford'

const API_KEY = '886ff18f3a0b44588a9e3d10dba801ee'

const screenshotsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_SCREENSHOT:
      const client = new oxford.Client(API_KEY)
      client.emotion.analyzeEmotion({
        data: oxford.makeBuffer(action.screenshot)
      }).then((response) => {
        console.log(response)
      })

      return [ ...state, { id: shortid.generate(), src: action.screenshot } ]
    default:
      return state
  }
}

export default screenshotsReducer
