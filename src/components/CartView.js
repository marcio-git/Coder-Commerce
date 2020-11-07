import React from 'react';
import './CartView.css';

function CartView() {
	return <>
		<div className="cart-title">Shopping Cart</div>
		<button className="btn btn-effect vaciar">Vaciar Carrito</button>
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