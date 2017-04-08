import React, { Component } from 'react'
import Camera from '../containers/Camera'
import DisplayScreenshots from '../containers/DisplayScreenshots'
import MenuToolbar from '../containers/MenuToolbar'

export default class App extends Component {
  render () {
    return (
      <div>
        <MenuToolbar />
        <div>
          <Camera />
        </div>
        <br />
        <div>
          <DisplayScreenshots />
        </div>
      </div>
    )
  }
}
