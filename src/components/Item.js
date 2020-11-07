import React from 'react';
import './Item.css'

function Item ({ item }) {
	return <>
		<div className='card'>
			<img src={item.url} className='card-img' alt='🕐'/>
			<p className='price'>{item.price}</p>
			<p>{item.title}</p>
		</div>
	</>
}

export default Item;