import * as types from '../actions/types'

const example = (state = {}, action) => {
  switch (action.type) {
    case types.EXAMPLE:
      console.log('Updating example reducer')
      return state
    default:
      return state
  }
}

export default example
