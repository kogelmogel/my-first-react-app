import React, { Component } from 'react'

export default class UserBoard extends Component {
    state = { active: true }

    toggle = () => { 
        this.setState({ //setState is used when we want action to happen
          active: !this.state.active
        })
      }
    
  render() {
    return  <div>
         <h3>User Board</h3>
      <div><p>User: <b>Alice</b></p>
      <p>Alice is { this.state.active ? 'present' : 'not present' }</p></div>
      <button onClick={this.toggle}>Toggle</button>
      <div><p>User: <b>Bob</b></p>
      <p>Bob is { this.state.active ? 'present' : 'not present' }</p></div>
      <button onClick={this.toggle}>Toggle</button>
      <div><p>User: <b>Charles</b></p>
      <p>Charles is { this.state.active ? 'present' : 'not present' }</p></div>
      <button onClick={this.toggle}>Toggle</button>
    </div>
  }
}

  