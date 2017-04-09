import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import SettingsDialog from './SettingsDialog'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEmotions, propagateTime } from '../actions'

class MenuToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleCaptureButtonClick = this.handleCaptureButtonClick.bind(this)

    this.state = {
      capturing: false,
      text: "Capture",
      interval: null
    }
  }

  toggleCapturing() {
    if (this.state.capturing) {
      this.setState({capturing: false, text: "Capture"})
      clearInterval(this.fetchTimerID)
      clearInterval(this.timerID)
    } else {
      this.setState({capturing: true, text: "Stop Capturing"})
      this.fetchTimerID = setInterval(this.props.fetchEmotions.bind(this, this.props.webcam), 5000)
      this.timerID = setInterval(this.props.propagateTime, 1000)
    }
  }

  handleChange (event, index, value) {
    this.setState({value});
  }

  handleCaptureButtonClick () {
    this.toggleCapturing()
  }

  render() {
    const date = new Date(null)
    date.setSeconds(this.props.time)
    return (
      <MuiThemeProvider>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons">face</FontIcon>
          <ToolbarTitle text="&nbsp;Gauge" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={date.toISOString().substr(11, 8)} />
          <ToolbarSeparator />
          <RaisedButton label={this.state.text} primary={!this.state.capturing} secondary={this.state.capturing} onTouchTap={this.handleCaptureButtonClick}/>
          <SettingsDialog />
        </ToolbarGroup>
      </Toolbar>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const webcam = state.webcam
  const time = state.time
  return {
    webcam,
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchEmotions, propagateTime }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuToolbar)
