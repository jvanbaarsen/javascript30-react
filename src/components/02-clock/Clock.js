import React from 'react'
import { setComponentClass } from '../../utils'
import Hand from './Hand'

import "./css/clock.scss"

class Clock extends React.Component {
  state = {
    hourDegree: 0,
    minuteDegree: 0,
    secondDegree: 0
  }

  componentDidMount() {
    setComponentClass("day-02-clock")

    const intervalId = setInterval(this.tick.bind(this), 1000)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  tick() {
    const date = new Date()

    const secondDegree = ((360 / 100 * (date.getSeconds() / 60)) * 100) + 90
    const minuteDegree = ((360 / 100 * (date.getMinutes() / 60)) * 100) + 90
    const hourDegree = ((360 / 100 * (date.getHours() / 12)) * 100) + 90

    this.setState({
      secondDegree,
      minuteDegree,
      hourDegree
    })
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <Hand degree={this.state.hourDegree} />
          <Hand degree={this.state.minuteDegree} />
          <Hand degree={this.state.secondDegree} />
        </div>
      </div>
    )
  }
}

export default Clock
