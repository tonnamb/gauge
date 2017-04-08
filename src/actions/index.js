import * as types from './types'

export const saveScreenshot = (screenshot) => {
  return {
    type: types.SAVE_SCREENSHOT,
    screenshot
  }
}
