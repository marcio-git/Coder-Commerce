import React from 'react';
import logo from '../images/ecommerce.png';

const styles = {
	float: 'left',
	width: '15vw',
}

function Brand() {
	return <a style={styles} href='/#'><img style={{width: '100%'}} src={logo} alt='logo'/></a>
}

export default Brand;