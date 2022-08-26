import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import TravelFront from '../components/TravelFront'
import TravelBack from '../components/TravelBack'
import MoosicFront from '../components/MoosicFront'
import MoosicBack from '../components/MoosicBack'
import TornadoBack from '../components/TornadoBack'
import TornadoFront from '../components/TornadoFront'

export default class FlipCard extends Component {
  render() {
    return (
      <div>
        <p className="click">Click on an image for more information</p>

        <div className="layout">
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
          >
            <FrontSide>
              <TravelFront />
            </FrontSide>
            <BackSide>
              <TravelBack />
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
          >
            <FrontSide>
              <TornadoFront />
            </FrontSide>
            <BackSide>
              <TornadoBack />
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
          >
            <FrontSide>
              <MoosicFront />
            </FrontSide>
            <BackSide>
              <MoosicBack />
            </BackSide>
          </Flippy>
        </div>
      </div>
    )
  }
}
