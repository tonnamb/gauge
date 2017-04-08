import React, { Component } from 'react'
import Camera from '../containers/Camera'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Gauge</h2>
        <div>
          <Camera />
        </div>
      </div>
    )
  }
}
