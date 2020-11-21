import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';
import EmptyCart from '../images/emptyCart.png';
import { Link } from 'react-router-dom';
import './CartView.css';

function CartView() {
	const { cart, removeItem, clear, totalPrice, calculoTotal } = useContext(CartContext);
	
	const [mount, setMount] = useState(true);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		calculoTotal()
		setTimeout(() => {
			setLoading(false)
			setMount(!mount)
		}, 1000)
	}, [])

	function EmptyCartView() {
		return (
		<section style={{ margin: '2%' }}>
			<img src={EmptyCart} style={{ display: 'block', margin: 'auto' }} alt="" />
			<h1 style={{ textAlign: 'center', fontSize: '3em' }}>Empty Cart</h1>
			<div style={{ textAlign: 'center', fontSize: '1.5em', paddingTop: '10vh' }}>
				<Link to="/">← Ir a Página Principal</Link>
			</div>
		</section>
		)
	}

	function ItemCartList() {
		return (
			<>
				{cart.map((prod) => (
					<div key={prod.item.id} className="item-cart-list">
						<div className="item cancel-img">
							<img onClick={() => removeItem(prod.item.id)} alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNDg1QTsiIGQ9Ik00NTIuOTIzLDk4LjQ2MmgtOTguNDYyQzM1NC40NjIsNDQuMDgxLDMxMC4zOCwwLDI1Niwwcy05OC40NjIsNDQuMDgxLTk4LjQ2Miw5OC40NjJINTkuMDc3DQoJYy0xMy41OTgsMC0yNC42MTUsMTEuMDE4LTI0LjYxNSwyNC42MTVzMTEuMDE4LDI0LjYxNSwyNC42MTUsMjQuNjE1aDkuODQ2VjQ0OGMwLjA1OSwzNS4zMjgsMjguNjcyLDYzLjk0MSw2NCw2NGgyNDYuMTU0DQoJYzM1LjMyOC0wLjA1OSw2My45NDEtMjguNjcyLDY0LTY0VjE0Ny42OTJoOS44NDZjMTMuNTk4LDAsMjQuNjE1LTExLjAxOCwyNC42MTUtMjQuNjE1UzQ2Ni41MjEsOTguNDYyLDQ1Mi45MjMsOTguNDYyeiBNMjU2LDQ5LjIzMQ0KCWMyNy4xODUsMCw0OS4yMzEsMjIuMDQ2LDQ5LjIzMSw0OS4yMzFoLTk4LjQ2MkMyMDYuNzY5LDcxLjI3NiwyMjguODE1LDQ5LjIzMSwyNTYsNDkuMjMxeiBNMzkzLjg0Niw0NDgNCgljMCw4LjE1My02LjYxNywxNC43NjktMTQuNzY5LDE0Ljc2OUgxMzIuOTIzYy04LjE1MywwLTE0Ljc2OS02LjYxNy0xNC43NjktMTQuNzY5VjE0Ny42OTJoMjc1LjY5MlY0NDh6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZCQkMwOyIgZD0iTTIwMS44NDYsMzc5LjA3N2MtMTMuNTk4LDAtMjQuNjE1LTExLjAxOC0yNC42MTUtMjQuNjE1VjI1NmMwLTEzLjU5OCwxMS4wMTgtMjQuNjE1LDI0LjYxNS0yNC42MTUNCgkJczI0LjYxNSwxMS4wMTgsMjQuNjE1LDI0LjYxNXY5OC40NjJDMjI2LjQ2MiwzNjguMDU5LDIxNS40NDQsMzc5LjA3NywyMDEuODQ2LDM3OS4wNzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQkJDMDsiIGQ9Ik0zMTAuMTU0LDM3OS4wNzdjLTEzLjU5OCwwLTI0LjYxNS0xMS4wMTgtMjQuNjE1LTI0LjYxNVYyNTZjMC0xMy41OTgsMTEuMDE4LTI0LjYxNSwyNC42MTUtMjQuNjE1DQoJCWMxMy41OTgsMCwyNC42MTUsMTEuMDE4LDI0LjYxNSwyNC42MTV2OTguNDYyQzMzNC43NjksMzY4LjA1OSwzMjMuNzUxLDM3OS4wNzcsMzEwLjE1NCwzNzkuMDc3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />

						</div>
						<div className="item product">
							<img src={prod.item.url} alt="🕐" />
							<p>{prod.item.product}</p>
						</div>
						<div className="item qty"><p>{prod.quantity}</p></div>
						<div className="item price"><p>${prod.item.price}</p></div>
						<div className="item total"><p>${prod.quantity * parseFloat(prod.item.price)}</p></div>
					</div>
				))}
				<div className="final-price">TOTAL: <span>${totalPrice}</span></div>
			</>
		)
	}
	
	return <>
		<div className="cart-title">Shopping Cart</div>
		{cart.length === 0 ? 
		<EmptyCartView /> : 
		<>
			<button onClick={clear} className="btn btn-effect vaciar" disabled={cart.length 	=== 0 ? true : false}>Vaciar Carrito</button>
			<br />
			{loading ? 
			<div className='loader'></div> : 
			<div className="list-cart-box">
				<ul>
					<li>Eliminar</li>
					<li>Producto</li>
					<li>Cantidad</li>
					<li>Precio</li>
					<li>Total</li>
				</ul>
				{!mount && <ItemCartList />}
			</div>}
		</>}
	</>
}

export default CartView