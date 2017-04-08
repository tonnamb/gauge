import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Webcam from 'react-webcam'
import { fetchEmotions } from '../actions'

class Camera extends Component {
  constructor (props) {
    super(props)

    this.takeScreenshot = this.takeScreenshot.bind(this)
  }

  takeScreenshot () {
    const screenshot = this.refs.webcam.getScreenshot()
    this.props.fetchEmotions(screenshot)
  }

  render () {
    return (
      <div style={{"textAlign": "center", "background": "grey"}}>
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
  return bindActionCreators({ fetchEmotions }, dispatch)
}

Camera.propTypes = {
  fetchEmotions: React.PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Camera)
