import React from 'react';
import Title from '../Title'
import Match from './Match'

export default function MatchWrapper() {
	return(
    <div className="container">
      <div className="row">
        <div className="one-half row" style={{marginTop: '25%'}}>
          <Title
            header="John Smith can help!"
            subheader="John is a consultant from BMW who is more than happy to help."  
          />
          <Match />
        </div>
      </div>
    </div>
	)
}