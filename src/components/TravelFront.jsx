import React, { Component } from 'react'
const travel = require('../Images/TravelBlogLogo.jpg')

export default class TravelFront extends Component {
  render() {
    return (
      <div>
        <img className="portfolioImg" src={travel} alt="" />
      </div>
    )
  }
}
