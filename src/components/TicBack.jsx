import React, { Component } from 'react'

export default class TicBack extends Component {
  render() {
    return (
      <div>
        <h2>TicTacToe</h2>
        <p>
          The game is standard Tic Tac Toe. One would need 2 players to play.
          This is my first project using HTML, CSS, and JavaScript and was built
          in a weekend.
        </p>
        <h2>Technologies</h2>
        <p> Javascript, HTML, CSS, & VSCode </p>
        <a
          className="website"
          href="https://github.com/embyrne13/TicTacToe"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>{' '}
        <a
          className="website"
          href="https://tictactoeblue.surge.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{' '}
      </div>
    )
  }
}
