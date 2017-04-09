import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class DisplayScreenshots extends Component {
  constructor (props) {
    super(props)
    this.renderScreenshots = this.renderScreenshots.bind(this)
    this.renderScores = this.renderScores.bind(this)
  }

  renderScreenshots () {
    return this.props.screenshots.map((image) => {
      return (
        <tr key={image.id}>
          <td>
            <img src={image.src} alt='screenshot' height='400' />
          </td>
          <td>
            {this.renderScores(image)}
          </td>
        </tr>
      )
    })
  }

  renderScores (image) {
    if (image.emotions.length === 0) {
      return (
        <div>
        <MuiThemeProvider><Chip alt="faces">
          <Avatar src={'img/no_faces.png'} />
          No Faces Detected
        </Chip></MuiThemeProvider>
        </div>
      )
    } else {
      const topTwo = this.getTopTwo(this.getAvgScores(image.emotions))
      const plotData = this.prepDataBarChart(image.emotions)
      return (
        <div>
          <div><MuiThemeProvider><Chip style={{margin: 4}} alt="faces">
            <Avatar src={'img/faces.png'} />
            {image.emotions.length} Face(s)
          </Chip></MuiThemeProvider>
          <MuiThemeProvider><Chip style={{margin: 4, width: "" + Math.max((topTwo.first.value * 100).toFixed(0), 12) + "%"}} alt={topTwo.first.key}>
            <Avatar src={'img/' + topTwo.first.key + '.png'} />
            {(topTwo.first.value * 100).toFixed(0)}%
          </Chip></MuiThemeProvider>
          <MuiThemeProvider><Chip style={{margin: 4, width: "" + Math.max((topTwo.second.value * 100).toFixed(0), 12) + "%"}} alt={topTwo.first.key}>
            <Avatar src={'img/' + topTwo.second.key + '.png'} />
            {(topTwo.second.value * 100).toFixed(0)}%
          </Chip></MuiThemeProvider>
          </div>
          <BarChart width={650} height={300} data={plotData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='count' />
          </BarChart>
        </div>
      )
    }
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
    const colorEmotions = {
      anger: 'rgb(207, 12, 15)',
      contempt: 'rgba(235, 45, 102, 0.95)',
      disgust: 'rgb(76, 168, 46)',
      fear: 'rgb(5, 8, 2)',
      happiness: 'rgb(213, 244, 10)',
      neutral: 'rgb(19, 227, 11)',
      sadness: 'rgb(11, 127, 227)',
      surprise: 'rgb(110, 14, 220)'
    }
    Object.entries(emotionsData).forEach(([key, value]) => {
      data.push({name: key, count: Number(value), fill: colorEmotions[key]})
    })
    return data
  }

  render () {
    return (
      <div style= {{fontFamily:"Lobster Two"}}>
        <table cellSpacing='20'>
          <thead>
            <tr>
              <th colSpan='2' style= {{fontFamily:"Lato", fontSize:"30px"}}>RESULTS</th>
            </tr>
            <tr>
              <th style= {{fontSize:"30px"}}>Screenshots</th>
              <th style= {{fontSize:"30px"}}>Graphs</th>
            </tr>
          </thead>
          <tbody>
            {this.renderScreenshots()}
          </tbody>
        </table>
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
