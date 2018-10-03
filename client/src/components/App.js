import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from '../components/Title'
import LinkButton from './LinkButton'

import '../styles/custom.css';
import '../styles/skeleton.css'
import '../styles/normalize.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="one-half row" style={{marginTop: '25%'}}>
              <Title 
                header="What do you need?"
                subheader="Tell us what you need, and we'll find somebody to help."
              />
            </div>
            <div className="one-half row" style={{marginTop: '10%'}}>
            <LinkButton route='/1'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
