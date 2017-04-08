import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayScreenshots extends Component {
  constructor (props) {
    super(props)
    this.renderScreenshots = this.renderScreenshots.bind(this)
  }

  renderScreenshots () {
    return this.props.screenshots.map((image) => 
      <li key={image.id}>
        <img src={image.src} alt="screenshot"/>
      </li>
    )
  }

  render () {
    return (
      <div>
        <h2>Screenshots</h2>
        <ul>
          {this.renderScreenshots()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const screenshots = state.screenshots
  return {
    screenshots
  }
}

DisplayScreenshots.propTypes = {
  screenshots: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(DisplayScreenshots)