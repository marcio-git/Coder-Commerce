import React, { useEffect, useState } from 'react';
import './Loader.css';
import ItemDetail from './ItemDetail';

function itemPromise() {
	return new Promise((res) => {
		setTimeout(() => {
			res([
				{id: 1,
				title: 'Auriculares Gamer Kotion Each G9000 Black Y Blue',
				stock: 5,
				price: '3800',
				url: 'http://http2.mlstatic.com/D_738955-MLA40252400386_122019-I.jpg'}
			])
		}, 3000)
	})
}


function ItemDetailContainer() {
	const [item, setItem] = useState(false);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		itemPromise().then(item => {
			setItem(item[0])
			setLoading(false)
		})
	}, [])

	if (loading) {
		return <div className='loader'></div>;
	}
	
	return <>
			{item && <ItemDetail item={ item } />}
		</>
}

export default ItemDetailContainer;