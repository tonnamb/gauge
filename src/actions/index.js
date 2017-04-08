import * as types from './types'

export function exampleActionCreator () {
  console.log('Creating action')
  return { type: types.EXAMPLE }
}
