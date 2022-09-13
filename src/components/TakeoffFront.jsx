import React, { Component } from 'react'
const takeoff = require('../Images/Takeoff.png')

export default class TravelFront extends Component {
  render() {
    return (
      <div>
        <img className="portfolioImg" src={takeoff} alt="" />
      </div>
    )
  }
}
