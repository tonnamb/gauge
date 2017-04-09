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

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEmotions } from '../actions'

class MenuToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.takeScreenshot = this.takeScreenshot.bind(this)
    this.startTime = null
  }

  state = {
    capturing: false,
    text: "Capture"
  };

  toggleCapturing() {
    if (this.state.capturing) {
      this.setState({capturing: false, text: "Capture"})
    } else {
      this.setState({capturing: true, text: "Stop Capturing"})
      this.startTime = new Date().now();
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  takeScreenshot () {
    this.toggleCapturing()
    const screenshot = this.props.webcam.getScreenshot()
    this.props.fetchEmotions(screenshot)
  }

  getTime() {
    if (this.state.capturing) {
      var time = new Date().now - this.startTime
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons">face</FontIcon>
          <ToolbarTitle text="&nbsp;Gauge" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="00:00:00" />
          <ToolbarSeparator />
          <RaisedButton label={this.state.text} primary={!this.state.capturing} secondary={this.state.capturing} onTouchTap={this.takeScreenshot}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Settings" rightIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
            <Divider />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const webcam = state.webcam
  return {
    webcam
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchEmotions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuToolbar)
