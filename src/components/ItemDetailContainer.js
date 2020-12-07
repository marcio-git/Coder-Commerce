import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import './Loader.css';
import ItemDetail from './ItemDetail';
import Page404 from './Page404';

function ItemDetailContainer() {
	const [item, setItem] = useState(false);
	const [loading, setLoading] = useState(true);
	const [page404, setPage404] = useState();
	const {id} = useParams();

/* -------------------------------- firebase -------------------------------- */
	useEffect(() => {
		const db = getFirestore();
		const itemCollection = db.collection('items');
		const item = itemCollection.doc(id);

		item.get().then((doc) => {
			if(!doc.exists) setPage404(true)
			setItem({ id: doc.id, ...doc.data() })
		}).catch(err => console.log('Error searching item: ', err))
		.finally(() => setLoading(false))

		return () => setPage404(false)
	}, [id])
/* -------------------------------------------------------------------------- */

	return <>
		{page404 ? <Page404 message={'Item'} /> : 
		loading ? <div id="preloader"><div id="loader"/></div> : 
		<ItemDetail item={ item } />}
		</>
}

export default ItemDetailContainer;