import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import isInside from 'is-inside-dom-element'


export default class App extends Component {

  state = {
    isInside: false,
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        background: 'black',
      }}>
        <div ref="x" style={{position: 'relative', marginBottom: '1rem', width: '25vw', height: '25vw', background: '#007bff',}}>
          <div style={{
            position: 'absolute',
            bottom: 3,
            left: 9,
            color: '#c1c1c1',
            fontSize: 39,
            fontWeight: 'bold',
          }}>{this.state.isInside ? 'YES' : 'NO'}</div>
        </div>
      </div>
    )
  }

  componentDidMount() {

    document.addEventListener('mousemove', throttle(this.handleMouseMove, 250))
  }

  handleMouseMove = (event) => {

    this.setState({isInside: isInside(event.x, event.y, this.refs.x)})
  }
}
