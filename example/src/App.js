import React, { Component } from 'react'

import ExampleComponent from 'is-inside-dom-element'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
