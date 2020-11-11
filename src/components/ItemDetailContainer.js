import React, { useEffect, useState } from 'react';
import './Loader.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const producstList = [
	{id: 1, title: 'producto 1', stock: 5, price: '230,00', url: 'https://unsplash.it/200?image=1080'},
	{id: 2, title: 'producto 2', stock: 4, price: '450,00', url: 'https://unsplash.it/200?image=1070'},
	{id: 3, title: 'producto 3', stock: 15, price: '69,90', url: 'https://unsplash.it/200?image=1060'},
	{id: 4, title: 'producto 4', stock: 2, price: '710,00', url: 'https://unsplash.it/200?image=1050'},
	{id: 5, title: 'producto 5', stock: 8, price: '65,00', url: 'https://unsplash.it/200?image=1040'},
	{id: 6, title: 'producto 6', stock: 0, price: '900,00', url: 'https://unsplash.it/200?image=1035'},
	{id: 7, title: 'producto 7', stock: 1, price: '320,00', url: 'https://unsplash.it/200?image=1020'},
	{id: 8, title: 'producto 8', stock: 3, price: '1200,00', url: 'https://unsplash.it/200?image=1005'},
]

function itemPromise(id) {
	return new Promise((res) => {
		setTimeout(() => {
			res(producstList.filter(i => i.id == id))
		}, 3000)
	})
}

function ItemDetailContainer() {
	const [item, setItem] = useState(false);
	const [loading, setLoading] = useState(true);
	const {id} = useParams();

	useEffect(() => {
		itemPromise(id).then(item => {
			setItem(item[0])
			setLoading(false)
		})
	}, [id])

	if (loading) {
		return <div className='loader'></div>;
	}
	
	return <>
			{item && <ItemDetail item={ item } />}
		</>
}

export default ItemDetailContainer;