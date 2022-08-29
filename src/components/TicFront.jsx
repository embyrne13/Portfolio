import React, { Component } from 'react'
const tic = require('../Images/TicTacToe.jpg')

export default class TicFront extends Component {
  render() {
    return (
      <div>
        <img className="portfolioImg" src={tic} alt="" />
      </div>
    )
  }
}
