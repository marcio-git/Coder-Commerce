import React from 'react';
import CartImg from '../images/cart-icon.svg';


function CartWidget() {
	return <>
		<div className='cartWidget'>
			<a href='/#'><img src={CartImg} alt='cart' style={{width: '3vw', filter: 'invert()'}}/></a>
		</div>
	</>
}

export default CartWidget;