import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../context/cartContext';


function CartWidget() {
	const { cart } = useContext(CartContext);
	const [ mount, setMount ] = useState();
	
	useEffect(() => {
		setMount(false)
		setTimeout(() => {
			setMount(true)
		}, 1)
	}, [cart])

	return <>
		<Link to="/cart" className='cartWidget'>
			{mount && <img src='/images/cart-icon.svg' alt='cart' className={cart.length !== 0 ? 'bounce' : 'false'} style={{filter: 'invert()'}}/>}
			{mount && cart.length !== 0 && <p>{cart.reduce((acc, val) => acc + val.quantity, 0)}</p>}
		</Link>
	</>
}

export default CartWidget;