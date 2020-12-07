import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
	color: '#fff',
	fontFamily: 'Raleway',
	fontSize: 'min(2.7vw, 2em)'
}

function Brand() {
	return <>
		<Link to="/" style={styles} >
			<p>CommerceHouse</p>
		</Link>
	</>
}

export default Brand;