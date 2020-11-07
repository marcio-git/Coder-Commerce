import React from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../images/cart-icon.svg';


function CartWidget() {
	return <>
		<div className='cartWidget'>
			<Link to="/cart"><img src={CartImg} alt='cart' style={{filter: 'invert()'}}/></Link>
		</div>
	</>
}

export default CartWidget;