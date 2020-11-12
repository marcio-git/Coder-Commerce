import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
	const [ mount, setMount ] = useState(true);
	const [ quantityAdded, setQuantityAdded ] = useState(null);

	const onAdd = quantityToAdd => {
		setQuantityAdded(quantityToAdd)
		setMount(!mount)
	}

	return <>
		<div className='detail-card'>
			<div className='side-1'>
				<img src={item.url} alt='🕐' />
			</div>
			<div className='side-2'>
				<p className='description'>{item.title}</p>
				<p className='price'>${item.price}</p>
				{mount && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
				{!mount && <Link to="/cart" style={{display: "grid", width: '150px', margin: 'auto'}}><button className="btn btn-effect">Comprar {quantityAdded}</button></Link>}
			</div>
		</div>
	</>
}

export default ItemDetail;