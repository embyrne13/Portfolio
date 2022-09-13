import React, { Component } from 'react'

export default class TravelBack extends Component {
  render() {
    return (
      <div>
        <h2>Takeoff</h2>
        <p>
          Takeoff is a flight website where users can search cities and dates
          and be able to find the available flights.
        </p>
        <h2>Technologies</h2>
        <p>PostgreSQL, Express.js, React.js, Node.js, CSS, & VSCode </p>
        <a
          className="website"
          href="https://github.com/embyrne13/takeoff-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Code
        </a>{' '}
        <a
          className="website"
          href="https://github.com/embyrne13/Takeoff-"
          rel="noopener noreferrer"
          target="_blank"
        >
          Backend Code
        </a>{' '}
        <a
          className="website"
          href="https://takeoffflight.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{' '}
      </div>
    )
  }
}
