import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import './CartView.css';

function CartView() {
	const { cart, clear } = useContext(CartContext);

	return <>
		<div className="cart-title">Shopping Cart</div>
		<button onClick={clear} className="btn btn-effect vaciar" disabled={cart.length === 0 ? true : false}>Vaciar Carrito</button>
		<div className="list-cart-box">
			<div className="item-cart-list">ITEM</div>
			<div className="item-cart-list">ITEM</div>
			<div className="item-cart-list">ITEM</div>
			<div className="item-cart-list">ITEM</div>
			<div className="item-cart-list">ITEM</div>
		</div>
	</>
}

export default CartView