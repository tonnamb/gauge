import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exampleActionCreator } from '../actions'

class ExampleButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.exampleActionCreator()
  }

  render () {
    return (
      <button className='btn btn-primary' type='submit' onClick={this.handleClick}>Example button</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ exampleActionCreator }, dispatch)
}

ExampleButton.propTypes = {
  exampleActionCreator: React.PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(ExampleButton)
