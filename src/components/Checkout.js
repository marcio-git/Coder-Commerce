import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmptyCartView from './EmptyCartView';
import './Checkout.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { CartContext } from '../context/cartContext'
import { getFirestore } from '../firebase'

function Input({ label, id, type, event}) {
	return (
		<div>
			<br/>
			<label>{label} :</label>
			<br/>
			<input className="input" id={id} type={type || "text"} onChange={event}></input>
		</div>
	)
}

function Checkout() {
	const { cart, totalPrice, clear } = useContext(CartContext)
	const [ order, setOrder ] = useState()
	const [ confirm, setConfirm ] = useState(false)
	const [ loading, setLoading ] = useState()
	const [ buyer, setBuyer] = useState({})

	useEffect(() => {
		console.log({confirm})
		console.log({buyer})
	}, [buyer, confirm])

	async function createOrder() {
		setLoading(true)
		delete buyer.emailConfirm;
		const newOrder = {
			buyer: buyer,
			items: cart.map(c => ({
				id: c.item.id, 
				description: c.item.description, 
				categoryId: c.item.categoryId, 
				product: c.item.product, 
				price: c.item.price, 
				quantity: c.quantity})),
			data: firebase.firestore.FieldValue.serverTimestamp(),
			total: totalPrice,
		};
		const db = getFirestore();
		const batch = db.batch();

		const itemsToUpdate = db.collection('items')
			.where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(c => c.item.id))

		const query = await itemsToUpdate.get();
		
		query.docs.forEach((docSnapshot, index) => {
			if (docSnapshot.data().stock >= cart[index].quantity) {
				batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[index].quantity})
			}
		})

		const orders = db.collection("orders");
		orders.add(newOrder).then(doc => {
			setOrder({id: doc.id, total: totalPrice, items: [...cart]});
			setLoading(false)
			setConfirm(true)
			clear();
		})
		await batch.commit();
	}

	const onInput = evt => {
		setBuyer({ ...buyer, [evt.target.id] : evt.target.value })
	}

	return <>
				{cart.length === 0 && !confirm && <EmptyCartView />}
				{cart.length !== 0 && !confirm && <>
					<Link to="/cart" className="back-button">
						← Atrás
					</Link>
					<div className="checkout">
						<div className="form-box">
							<h2>Completa el formulario</h2>
							<div className='form-box-inputs'>
								<Input event={onInput} label={'Nombre'} id={'name'} />
								<Input event={onInput} label={'Apellido'} id={'lastname'}/>
								<Input event={onInput} label={'Email'} id={'email'} type={'email'} />
								<Input event={onInput} label={'Confirmar Email'} id={'emailConfirm'} type={'email'} />
								<Input event={onInput} label={'Teléfono'} id={'phone'} />
								<div>
									<button style={{marginTop: '45px'}} className="btn btn-effect" onClick={createOrder} disabled={!buyer.name || !buyer.lastname || !(buyer?.phone?.length >= 10)  || buyer.email !== buyer.emailConfirm}>REALIZAR COMPRAR</button>
								</div>
							</div>
						</div>
						<img src='/images/gif.gif' alt="gif"></img>
					</div>
					{loading && <>
						<div className="blur"></div>
						<div id="preloader"><div id="loader"/></div>
					</>}
				</>
				}
				{confirm && <div className="confirm-box">
					<h1>¡Su orden ha sido realizado con éxito!</h1>
					<img src="/images/truck.gif" alt="img"></img>
					<h2>Nos comunicaremos con ud. en la brevedad</h2>
					<div className="order-detail">
						<h3>Resumen de compra</h3>
						<p>El identificador de su compra: <strong>{order.id}</strong></p>
						<hr/>
						{order.items.map(order => {
							return <div key={order.item.id}>
									<p>{order.item.product}</p>
									<p>Precio ${order.item.price} x {order.quantity} {order.quantity > 1 ? 'unidades' : 'unidad'}</p>
								</div>
						})}
						<hr/>
						<span>Total: {order.total.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</span>
					</div>
					</div>}
		</>;
}

export default Checkout;
