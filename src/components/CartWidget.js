import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartImg from '../images/cart-icon.svg';
import './CartWidget.css';
import { CartContext } from '../context/cartContext';


function CartWidget() {
	const { cart } = useContext(CartContext);
	
	return <>
		<div className='cartWidget'>
			<Link to="/cart">
				<img src={CartImg} alt='cart' style={{filter: 'invert()'}}/>
				<p>{cart.length === 0 ? null : cart.length}</p>
			</Link>
		</div>
	</>
}

export default CartWidget;