import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ecommerce.png';

const styles = {
	float: 'left',
	width: '15vw',
}

function Brand() {
	return <Link to="/" style={styles} ><img style={{width: '100%'}} src={logo} alt='logo'/></Link>
}

export default Brand;