import React, { Component } from 'react'

export default class TravelBack extends Component {
  render() {
    return (
      <div>
        <h2>Moosic</h2>
        <p>
          Moosic is a music app where users are able to browse for songs as well
          as create playlists where they can add their favorite songs.
        </p>
        <h2>Technologies</h2>
        <p>PostgreSQL, Express.js, React.js, Node.js, CSS, & VSCode </p>
        <a
          className="website"
          href="https://github.com/pfknight8/Moosic_Frontend"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Code
        </a>{' '}
        <a
          className="website"
          href="https://github.com/Tommy-layy/moosic_backend"
          rel="noopener noreferrer"
          target="_blank"
        >
          Backend Code
        </a>{' '}
        <a
          className="website"
          href="https://moosicfrontend.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{' '}
      </div>
    )
  }
}
