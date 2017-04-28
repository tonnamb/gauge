import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    return (
      <div className='welcome-container'>
        <h2>Welcome to Gauge</h2>
        <p>This app captures photo from your webcam every 5 seconds, recognizes your emotions and transcribes what you say!</p>
        <p>How to use:</p>
        <ol>
          <li>Register on <a href="https://www.microsoft.com/cognitive-services/en-us/emotion-api" target="_blank">Microsoft Azure's Emotion API</a> for an API key.</li>
          <li>Click 'Set API Key' to enter your registered API key.</li>
          <li>Click 'Capture' to start capturing photo.</li>
          <li>Every 5th second, smile for the camera!</li>
          <li>Say something!</li>
          <li>Click 'Stop Capturing' to stop.</li>
        </ol>
        <p>Only works on Chrome and Firefox. Fork me on <a href="https://github.com/tonnamb/gauge" target="_blank">Github</a></p>
      </div>
    )
  }
}

export default Welcome
