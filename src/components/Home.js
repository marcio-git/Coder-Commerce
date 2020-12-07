import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemList from './ItemList';
import './Loader.css';


function ItemListContainer({slogan}) {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { categoryId } = useParams()
	
	/* -------------------------------- firebase -------------------------------- */
	useEffect(() => {
		const db = getFirestore();
		let itemCollection = db.collection('items')

		if(categoryId) itemCollection = itemCollection.where('categoryId', '==', categoryId)
		
		itemCollection.get().then((querySnapshot) => {
			if(querySnapshot.size === 0) console.log('No results')
			setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
			setLoading(false)
		})
		console.log({items})
	}, [categoryId])
	/* -------------------------------------------------------------------------- */

	return <>
		<h1 className='slogan'>
			{slogan}
		</h1>
		{loading ? <div id="preloader"><div id="loader"/></div> : <ItemList items={ items }/>}
	</>
};

export default ItemListContainer;