import React, { Component } from 'react';

import Title from '../components/Title'

import '../styles/App.css';
import '../styles/skeleton.css'
import '../styles/normalize.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{marginTop: '25%'}}>
            <Title />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
