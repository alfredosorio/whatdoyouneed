import React from 'react';
import Title from '../Title'
import Topics from './Topics'
import { Link } from 'react-router-dom';

export default function TopicWrapper() {
	return(
    <div className="container">
      <div className="row">
        <div className="one-half row" style={{marginTop: '25%'}}>
          <Title
            header="Select a topic..."
            subheader="Select a topic below."  
          />
          <Topics />
        </div>
      </div>
    </div>
	)
}