import React from 'react';

const Title = props => {
	return (
		<>
			<h1 style={{ color: 'red' }}>{props.title}</h1>
			<h4>{props.children}</h4>
		</>
	);
};

export default Title;
