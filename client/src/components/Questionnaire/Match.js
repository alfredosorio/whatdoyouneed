import React, { Component } from 'react';
import profileImage from '../../assets/profile_image.jpg'

export default class Match extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <div>
        <div style={{ 
          fontSize: '25px',
          fontWeight: 'bolder',
          marginTop: '5%',
          marginBottom: '5%'
         }}>
          <a
          style={{ textDecoration: 'none' }}
          href="mailto:john@bmwbrunswick.com.au?subject=Please%20call%20me%20on%200412345678">
            Request John to call you back.
          </a>
        </div>
        <div style={{ display: 'inline' }}>
          <img
            style={{
              borderRadius: '50%',
              borderStyle: 'solid',
              borderWidth: '5px',
              borderColor: '#fff'
            }}
            src={profileImage}
            alt="Profile Image"
            height='200'
            width='200'
          />
        </div>
        <div style={{
          display: 'inline-block',
          position: 'absolute',
          marginLeft: '5%',
          marginTop: '4%',
          fontSize: '18px'
        }}>
            <b>Customer Rating: </b>
            5/5
            <br />
            <b>Position: </b>
            Sales Consultant
            <br />
            <b>Location: </b>
            BMW Brunswick
            <br />
            <b>Success Rate: </b>
            80%
        </div>
      </div>
    )
  }
}