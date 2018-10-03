import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <div>
      {console.log(this.state)}
        <a className='list-item'>
          I need help finding an interior designer for my home.
        </a>
        <br />
        <Link to="/3" style={{ textDecoration: 'none' }}>
        <a className='list-item'>
          I need a new car.
        </a>
        </Link>
        <br />
        <a className='list-item'>
          Something in my house needs attention.
        </a>
        <br />
      </div>
    )
  }
}