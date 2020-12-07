import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../context/cartContext';


function CartWidget() {
	const { cart } = useContext(CartContext);
	
	return <>
		<Link to="/cart" className='cartWidget'>
			<img src='/images/cart-icon.svg' alt='cart' style={{filter: 'invert()'}}/>
			<p>{cart.length === 0 ? null : cart.length}</p>
		</Link>
	</>
}

export default CartWidget;