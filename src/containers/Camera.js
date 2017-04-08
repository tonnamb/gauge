import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Webcam from 'react-webcam'
import { saveScreenshot } from '../actions'

class Camera extends Component {
  constructor (props) {
    super(props)

    this.takeScreenshot = this.takeScreenshot.bind(this)
  }

  takeScreenshot () {
    const screenshot = this.refs.webcam.getScreenshot()
    this.props.saveScreenshot(screenshot)
    console.log("Screenshotss")
  }

  render () {
    return (
      <div>
        <Webcam
          ref='webcam'
          muted
          height={600}
          width={800}
          screenshotFormat='image/png'
        />
        <div>
          <button onClick={this.takeScreenshot}>Capture</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveScreenshot }, dispatch)
}

Camera.propTypes = {
  saveScreenshot: React.PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Camera)
