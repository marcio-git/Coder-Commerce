import React, { useEffect, useState } from 'react';
import { getFirestore } from '../firebase';
import ItemList from './ItemList';
import './Loader.css';


function ItemListContainer({slogan}) {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	
	/* -------------------------------- firebase -------------------------------- */
	useEffect(() => {
		const db = getFirestore();
		const itemCollection = db.collection('items')
		// const priceItems = itemCollection.where('price', '>', 3000)
		itemCollection.get().then((querySnapshot) => {
			if(querySnapshot.size === 0) console.log('No results')
			setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
			console.log(items)
			setLoading(false)
		})
	}, [])
	/* -------------------------------------------------------------------------- */

	return <>
		<h1 className='slogan'>
			{slogan}
		</h1>
		{loading ? <div className='loader'></div> : <ItemList items={ items }/>}
	</>
};

export default ItemListContainer;