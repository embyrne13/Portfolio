import React, { Component } from 'react'

export default class TravelBack extends Component {
  render() {
    return (
      <div>
        <h2>Travel Blog</h2>
        <p>
          A user will be able to view 6 of my favorite cities and they can read
          my top 10 things to do in each city. They can leave comments on my
          blog posts and fill out a form to contact me.
        </p>
        <h2>Technologies</h2>
        <p>MongoDB, Express.js, React.js, Node.js, & CSS</p>
        <a
          className="website"
          href="https://github.com/embyrne13/Travel-Blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>{' '}
        <a
          className="website"
          href="https://emilytraveltips.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{' '}
      </div>
    )
  }
}
