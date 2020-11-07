import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
	console.log(item)
	return <>
		<div className='detail-card'>
			<div className='side-1'>
				<img src={item.url} alt='🕐' />
			</div>
			<div className='side-2'>
				<p className='description'>{item.title}</p>
				<p className='price'>${item.price}</p>
				<ItemCount stock={item.stock} initial={1} onAdd={quantity => alert(`Agregados al carrito: ${quantity}`)} />
			</div>
		</div>
	</>
}

export default ItemDetail;