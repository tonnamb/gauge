import React, { Component } from 'react'
import ExampleButton from '../containers/ExampleButton'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>React Redux Boilerplate</div>
        <div>
          <ExampleButton />
        </div>
      </div>
    )
  }
}
