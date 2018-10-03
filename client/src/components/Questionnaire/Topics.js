import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Topics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <div>
        <a className='list-item'>
          Health & Wellbeing
        </a>
        <br />
        <Link to="/2" style={{ textDecoration: 'none' }}>
        <a className='list-item'>
          Services
        </a>
        </Link>
        <br />
        <a className='list-item'>
          Finance
        </a>
        <br />
        <a className='list-item'>
          Business
        </a>
        <br />
        <a className='list-item'>
          Travel
        </a>
      </div>
    )
  }
}