import React, { useEffect, useState } from 'react';
import { getFirestore } from '../firebase';
import './Loader.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
	const [item, setItem] = useState(false);
	const [loading, setLoading] = useState(true);
	const {id} = useParams();

/* -------------------------------- firebase -------------------------------- */
useEffect(() => {
	const db = getFirestore();
	const itemCollection = db.collection('items');
	const item = itemCollection.doc(id)
	item.get().then((doc) => {
		if(!doc.exists) console.log('Item does not exist.')
		setItem({ id: doc.id, ...doc.data() })
	}).catch(err => console.log('Error searching item: ', err))
	.finally(() => setLoading(false))
}, [])
/* -------------------------------------------------------------------------- */

	return <>
			{loading ? <div id="preloader"><div id="loader"/></div> : <ItemDetail item={ item } />}
		</>
}

export default ItemDetailContainer;