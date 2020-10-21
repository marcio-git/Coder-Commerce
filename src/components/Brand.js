import React from 'react';
import logo from '../ecommerce.png';

const styles = {
	float: 'left',
	width: '15vw',
	transform: 'translate(0%, -10%)'
}

function Brand() {
	return <a style={styles} href='/#'><img style={{width: '100%'}} src={logo} alt='logo'/></a>
}

export default Brand;