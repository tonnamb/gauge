import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

export default class SettingsDialog extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Apply"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const settings = (<div>
      <TextField
      hintText="API Key"
      errorText="This field is required"
      />,
      <Slider label="Test" step={0.10} value={0.5} />
      </div>)

    return (
      <div>
        <RaisedButton
          backgroundColor="#a4c639"
          icon={<FontIcon className="material-icons">settings</FontIcon>}
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title="Settings"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div>
            {settings}
          </div>
        </Dialog>
      </div>
    );
  }
}
