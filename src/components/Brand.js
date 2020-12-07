import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
	float: 'left',
	width: '15vw'
}

function Brand() {
	return <>
		<Link to="/" style={styles} >
			<img style={{ width: '100%' }} src='/images/ecommerce.png' alt='logo' />
		</Link>
	</>
}

export default Brand;