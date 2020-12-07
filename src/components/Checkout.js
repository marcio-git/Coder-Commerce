import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { CartContext } from '../context/cartContext'
import { getFirestore } from '../firebase'

function Input({ ph, type, event}) {
	return (
		<div>
			<input placeholder={ph} type={type || "text"} onChange={event}></input>
		</div>
	)
}

function Checkout() {
	const { cart, totalPrice, clear } = useContext(CartContext)
	const [ orderId, setOrderId ] = useState()
	const [ confirm, setConfirm ] = useState(false)
	// const [loading, setLoading] = useState(true)
	const [ buyer, setBuyer] = useState({
		name: '',
		lastname: '',
		email: '',
		phone: ''
	})

	useEffect(() => {
		console.log(buyer)
	}, [buyer])

	console.log(cart.map(item => ({id: item.id, product: item.title, quantity: item.quantity})))

	function createOrder() {
		const newOrder = {
			buyer: buyer,
			items: cart.map(i => ({id: i.item.id, product: i.item.product, quantity: i.quantity})),
			data: firebase.firestore.FieldValue.serverTimestamp(),
			total: totalPrice,
		};
		console.log(newOrder.buyer)
		const db = getFirestore();
		const orders = db.collection("orders");
		orders.add(newOrder).then(id => {
			console.log('Order created with id: ', id.id);
			setOrderId(id.id)
			setConfirm(true)
			clear()
		})
		
	}

	const onInput = evt => {
		console.log(evt.target.placeholder)
		console.log(buyer)
		let b = buyer
		let ph = evt.target.placeholder
		switch(ph) {
			case 'Nombre': b.name = evt.target.value;
				break;
			case 'Apellido': b.lastname = evt.target.value;
				break;
			case 'Email': b.email = evt.target.value;
				break;
			case 'Telefono': b.phone = evt.target.value;
				break;
			default: console.log('👍')
		}
		setBuyer(buyer)
	}

	return <>

        { cart.length === 0 && !confirm && <section style={{ margin: '2%' }}>
					<img src='/images/emptyCart.png' style={{ display: 'block', margin: 'auto' }} alt="" />
					<h1 style={{ textAlign: 'center', fontSize: '3em' }}>Empty Cart</h1>
					<div style={{ textAlign: 'center', fontSize: '1.5em', paddingTop: '10vh' }}>
						<Link to="/">← Ir a Página Principal</Link>
					</div>
				</section>
        }
        {cart.length !== 0 && !confirm && <>
						<Input ph={'Nombre'} event={onInput}/>
						<Input ph={'Apellido'} event={onInput}/>
						<Input ph={'Telefono'} event={onInput}/>
						<Input ph={'Email'} event={onInput}/>
						<button className="btn btn-effect" onClick={createOrder}>COMPRAR</button>
				</>
				}
        {confirm && <div style={{with: '80%', margin: 'auto'}}>
            <h1>¡Felicitaciones!</h1>
            <p>El identificador de su compra: {orderId}</p>
        </div>}
    </>;
}

export default Checkout;
