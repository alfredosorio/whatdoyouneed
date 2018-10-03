import React from 'react';
import { Link } from 'react-router-dom';

export default function ActionButton(props) {
	return(
		<div>
			<Link to={props.route} style={{ textDecoration: 'none' }}>
				<a style={{ color: 'white' }}
					className='list-item'>
          	Begin
      	</a>
      </Link>
		</div>
	)
}