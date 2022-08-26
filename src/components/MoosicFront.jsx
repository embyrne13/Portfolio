import React, { Component } from 'react'
const moosic = require('../Images/Moosic.png')

export default class TravelFront extends Component {
  render() {
    return (
      <div>
        <img className="portfolioImg" src={moosic} alt="" />
      </div>
    )
  }
}
