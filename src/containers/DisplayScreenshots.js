import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayScreenshots extends Component {
  constructor (props) {
    super(props)
    this.renderScreenshots = this.renderScreenshots.bind(this)
  }

  renderScreenshots () {
    return this.props.screenshots.map((image) => {
      const topTwo = this.getTopTwo(this.getAvgScores(image.emotions))
      return (
        <li key={image.id}>
          <img src={image.src} alt='screenshot' />
          <p>1. {topTwo.first.key} = {(topTwo.first.value * 100).toFixed(0)} %</p>
          <p>2. {topTwo.second.key} = {(topTwo.second.value * 100).toFixed(0)} %</p>
        </li>
      )
    })
  }

  getTopTwo (scores) {
    let firstKey, secondKey
    let firstValue = 0
    let secondValue = 0
    Object.entries(scores).forEach(([key, value]) => {
      if (value > firstValue) {
        secondValue = firstValue
        secondKey = firstKey
        firstValue = value
        firstKey = key
      } else if (value > secondValue) {
        secondValue = value
        secondKey = key
      }
    })
    return {
      first: {key: firstKey, value: firstValue},
      second: {key: secondKey, value: secondValue}
    }
  }

  getAvg (emotions, key) {
    let sum = 0
    emotions.forEach(obj => {
      sum += obj.scores[key]
    })
    return sum / emotions.length
  }

  getAvgScores (emotions) {
    let avgScore = {}
    for (let emo in emotions[0].scores) {
      avgScore[emo] = this.getAvg(emotions, emo)
    }
    return avgScore
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
