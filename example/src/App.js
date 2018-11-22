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
      }}>
        <div style={{marginBottom: '1rem',}}>Is the mouse inside the DOM element??</div>
        <div ref="x" style={{marginBottom: '1rem', width: '25vw', height: '25vw', background: 'black',}}/>
        <div><strong>{this.state.isInside ? 'YES' : 'NO'}</strong></div>
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
