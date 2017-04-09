import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Webcam from 'react-webcam'
import { fetchEmotions, mountWebcam } from '../actions'

class Camera extends Component {
  constructor (props) {
    super(props)

    this.takeScreenshot = this.takeScreenshot.bind(this)
  }

  componentDidMount () {
    this.props.mountWebcam(this.refs.webcam)
  }

  takeScreenshot () {
    const screenshot = this.props.webcam.getScreenshot()
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const webcam = state.webcam
  return {
    webcam
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchEmotions, mountWebcam }, dispatch)
}

Camera.propTypes = {
  fetchEmotions: React.PropTypes.func.isRequired,
  mountWebcam: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Camera)
