import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './Loader.css';

let productList = [
	{id: 1, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1080'},
	{id: 2, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1070'},
	{id: 3, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1060'},
	{id: 4, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1050'},
	{id: 5, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1040'},
	{id: 6, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1035'},
	{id: 7, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1020'},
	{id: 8, title: 'producto', price: '0,00', url: 'https://unsplash.it/200?image=1005'},
]

function itemsPromise() {
	return new Promise((res) => {
		setTimeout(() => {
			res(productList)
		}, 2000)
	})
}
function ItemListContainer({slogan}) {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		itemsPromise().then(list => {
			setItems(list)
			setLoading(false)
		})
	}, [])

	if (loading) {
		return <div className='loader'></div>;
	}

	return <>
		<h1 className='slogan'>
			{slogan}
		</h1>
		<ItemList items={ items }/>
	</>
};

export default ItemListContainer;