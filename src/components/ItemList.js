import React from 'react';
import './ItemList.css'
import Item from './Item';

function ItemList({ items }) {
	return <div className='item-list-wrapper'>
		<div className="item-list">
			{items.map(item => (
				<Item key={item.id} item={ item } />
			))}
		</div>
	</div>
}

export default ItemList;