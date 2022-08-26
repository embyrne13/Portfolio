import React, { Component } from 'react'

export default class TornadoBack extends Component {
  render() {
    return (
      <div>
        <h2>Tornado</h2>
        <p>
          Tornado is a word game where a user has 5 chances to guess the word.
          Each time they guess a wrong letter, they lose a part of their house.
          If they don't get the word in time, a tornado will knock their house
          down.
        </p>
        <h2>Technologies</h2>
        <p> Javascript, HTML, CSS, & VSCode </p>
        <a
          className="website"
          href="https://github.com/embyrne13/Tornado"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>{' '}
        <a
          className="website"
          href="https://tornado.surge.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{' '}
      </div>
    )
  }
}
