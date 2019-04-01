import React, { Component } from 'react'

export default class LightSwitch extends Component {
  state = { active: true }

  toggle = () => { //this is a function when button is clicked
    this.setState({ //setState is used when we want action to happen
      active: !this.state.active
    })
  }

  render() {
    return (<div>
      <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}