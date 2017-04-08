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

export default class MenuToolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <MuiThemeProvider>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons">face</FontIcon>
          <ToolbarTitle text="&nbsp;Gauge" />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Capture" primary={true} />
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
