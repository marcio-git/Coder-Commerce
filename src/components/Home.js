import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import ItemList from './ItemList';
import Page404 from './Page404';
import './Loader.css';


function ItemListContainer({slogan}) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState();
	const [ page404, setPage404] = useState();
	const { categoryId } = useParams();
	
	/* -------------------------------- firebase -------------------------------- */
	useEffect(() => {
		setLoading(true)
		const db = getFirestore();
		let itemCollection = db.collection('items')

		if(categoryId) itemCollection = itemCollection.where('categoryId', '==', categoryId)
		
		itemCollection.get().then((querySnapshot) => {
			if(querySnapshot.size === 0) setPage404(true)
			setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
			setLoading(false)
		})
		return () => setPage404(false)
	}, [categoryId])
	/* -------------------------------------------------------------------------- */

	return <>
		<h1 className='slogan' style={{display: page404 && "none"}}>
			{slogan}
		</h1>
		{page404 && <Page404 message={'List'} />}
		{loading ? <div id="preloader"><div id="loader"/></div> 
		: <ItemList items={ items }/>}
	</>
};

export default ItemListContainer;