import React, { Component } from 'react'
import Camera from '../containers/Camera'
import DisplayScreenshots from '../containers/DisplayScreenshots'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Gauge</h2>
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
