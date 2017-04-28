import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeApiKey } from '../actions'

class SettingsDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      textFieldValue: ''
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleApply = this.handleApply.bind(this)
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
  }

  handleOpen () {
    this.setState({open: true})
  }

  handleCancel () {
    this.setState({open: false})
  }

  handleApply () {
    this.props.changeApiKey(this.state.textFieldValue)
    this.setState({open: false, textFieldValue: ''})
  }

  handleTextFieldChange (e) {
    this.setState({textFieldValue: e.target.value})
  }

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label='Apply'
        primary
        onTouchTap={this.handleApply}
      />
    ]

    const settings = (
      <div>
        <TextField
          hintText='Emotions API Key'
          errorText='This field is required'
          value={this.state.textFieldValue}
          onChange={this.handleTextFieldChange}
        />
      </div>)

    return (
      <div>
        <RaisedButton
          backgroundColor='a4c639'
          label='Set API Key'
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title='Set API Key'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <div>
            {settings}
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeApiKey }, dispatch)
}

export default connect(null, mapDispatchToProps)(SettingsDialog)
