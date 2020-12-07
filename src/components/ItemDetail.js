import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';

function ItemDetail({ item }) {
	const [ mount, setMount ] = useState(true);
	const [ quantityAdded, setQuantityAdded ] = useState(null);
	const { addItem } = useContext(CartContext);

	const onAdd = quantityToAdd => {
		addItem(
			{
				id: item.id,
				product: item.title,
				description: item.description,
				categoryId: item.categoryId,
				price: item.price,
				picture: item.picture
			}, quantityToAdd)
		setQuantityAdded(quantityToAdd)
		setMount(!mount)
	}

	return <>
		<Link to="/" className="back-button">
			← Atrás
		</Link>
		<div className="category">
			<p>Categoría {'>'} <Link to={`/category/${item.categoryId}`}>{item.categoryId}</Link></p>
		</div>
		<div className='detail-card'>
			<div className='side-1'>
				<img src={`/images/catalog/${item.picture}`} alt='🕐' />
			</div>
			<div className='side-2'>
				<p className='title'>{item.title}</p>
				<p className='description'>{item.description}</p>
				<p className='price'>{item.price.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</p>
				{mount && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
				{!mount && <Link to="/cart" style={{display: "grid", width: '150px', margin: 'auto'}}><button className="btn btn-effect">Comprar {quantityAdded}</button></Link>}
			</div>
		</div>
	</>
}

export default ItemDetail;