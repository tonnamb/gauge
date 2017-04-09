import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

class DisplayScreenshots extends Component {
  constructor (props) {
    super(props)
    this.renderScreenshots = this.renderScreenshots.bind(this)
  }

  renderScreenshots () {
    return this.props.screenshots.map((image) => {
      const topTwo = this.getTopTwo(this.getAvgScores(image.emotions))
      const plotData = this.prepDataBarChart(image.emotions)
      return (
        <li key={image.id}>
          <img src={image.src} alt='screenshot' />
          <p>Number of faces recognized = {image.emotions.length}</p>
          <p>1. {topTwo.first.key} = {(topTwo.first.value * 100).toFixed(0)} %</p>
          <p>2. {topTwo.second.key} = {(topTwo.second.value * 100).toFixed(0)} %</p>
          <BarChart width={600} height={300} data={plotData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='count' fill='#8884d8' />
          </BarChart>
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

  prepDataBarChart (emotions) {
    // populate emotions
    let emotionsData = {}
    Object.entries(emotions[0].scores).forEach(([key, value]) => {
      emotionsData[key] = 0
    })

    // cumulative number of person
    emotions.forEach((person) => {
      emotionsData[this.getTopTwo(person.scores).first.key] += 1
    })

    // prepare data
    let data = []
    Object.entries(emotionsData).forEach(([key, value]) => {
      data.push({name: key, count: Number(value)})
    })
    return data
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
