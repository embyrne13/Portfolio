import React, { Component } from 'react'
const tornado = require('../Images/Tornado.png')

export default class TravelFront extends Component {
  render() {
    return (
      <div>
        <img className="portfolioImg" src={tornado} alt="" />
      </div>
    )
  }
}
