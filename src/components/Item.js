import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item ({ item }) {
	return <>
		<div className='card'>
			<Link to={`/item/${item.id}`}>
				<img src={item.url} className='card-img' alt='🕐'/>
			</Link>
			<p className='price'>${item.price}</p>
			<p>{item.title}</p>
		</div>
	</>
}

export default Item;