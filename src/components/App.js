import React, { Component } from 'react'
import Camera from '../containers/Camera'
import DisplayScreenshots from '../containers/DisplayScreenshots'
import MenuToolbar from '../containers/MenuToolbar'
import Welcome from '../containers/Welcome'

export default class App extends Component {
  render () {
    return (
      <div>
        <Welcome />
        <MenuToolbar />
        <div>
          <Camera />
        </div>
        <div>
          <DisplayScreenshots />
        </div>
      </div>
    )
  }
}
