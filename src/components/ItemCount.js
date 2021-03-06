import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
	const [quantity, setQuantity] = useState(stock === 0 ? 0 : initial);

	const add = () => quantity < stock ? setQuantity(quantity + 1) : quantity;
	const remove = () => quantity > initial ? setQuantity(quantity - 1) : quantity;
	
	return <>
		<div className="item-count">
			<span style={{color: 'var(--secondary)',fontWeight: 600, margin: '5px'}}>Stock { stock }</span>
			<div className="add-remove">
				<button className="btn btn-effect" onClick={ remove }>－</button>
				<p style={{fontSize: '2em', textAlign: 'center'}}>{ quantity }</p>
				<button className="btn btn-effect" onClick={ add }>＋</button>
			</div>
			<button  className="btn btn-effect add-cart" disabled={ stock < 1 ? true : false } onClick={ () => onAdd(quantity) }>
				Agregar al carrito
			</button>
		</div>
	</>
}

export default ItemCount;