import React from 'react';
import Title from '../Title'
import Questions from './Questions'
import { Link } from 'react-router-dom';

export default function QuestionWrapper() {
	return(
    <div className="container">
      <div className="row">
        <div className="one-half row" style={{marginTop: '25%'}}>
          <Title
            header="Services"
            subheader="Select a service below."  
          />
          <Questions />
        </div>
      </div>
    </div>
	)
}