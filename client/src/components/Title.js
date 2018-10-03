import React from 'react';

export default function Title(props) {
	return(
		<div>
			<h1 style={{
				fontWeight: 'bold',
				fontSize: '50px',
				color: 'white',
				marginBottom: '10px'
			}}>{props.header}</h1>
			<p style={{ color: 'white' }}>{props.subheader}</p>
		</div>
	)
}