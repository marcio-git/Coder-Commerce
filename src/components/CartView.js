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
						<div className="item edit-icon">
							<Link to={`/item/${prod.item.id}`}>
								<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5NiA1MTEuOTk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk2IDUxMS45OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDAwRkY7IiBkPSJNNTExLjk5NiwxMDAuNzg0Yy0wLjAyMS01LjY1My0yLjI4My0xMS4wNjEtNi4yOTMtMTUuMDRMNDI1LjcwNCw2LjU5OQ0KCWMtOC4zMDktOC4yMDItMjEuNjY0LTguMjAyLTI5Ljk3MywwbC02OC41ODUsNjcuNjI1SDYwLjQ4NWMtMzQuMTY1LDEuNDQtNjAuOTY5LDI5LjgxMy02MC40NzksNjMuOTk5VjQ1MS4wNw0KCWMwLDMzLjM5NywyNy4wODIsNjAuNDc5LDYwLjQ3OSw2MC40NzlIMzIzLjUyYzMzLjM5NywwLDYwLjQ3OS0yNy4wODIsNjAuNDc5LTYwLjQ3OVYyMzguODA4TDUwNS44MDksMTE1LjkzDQoJQzUwOS43OTksMTExLjg5OCw1MTIuMDI4LDEwNi40NDgsNTExLjk5NiwxMDAuNzg0eiBNMzQxLjMzMyw0NTEuMDdjMCw5LjgzNC03Ljk3OCwxNy44MTMtMTcuODEzLDE3LjgxM0g2MC40ODUNCgljLTkuODM0LDAtMTcuODEzLTcuOTc4LTE3LjgxMy0xNy44MTNWMTM4LjIyM2MtMC4xNDktMTAuNTM4LDcuNDI0LTE5LjU5NCwxNy44MTMtMjEuMzMzaDIyMy4zNTVsLTg1LjMzMiw4NC4zNzINCgljLTQuMDc1LDMuOTg5LTYuMzc5LDkuNDUtNi40LDE1LjE0NnY4MS44MTJjMCwxMS43ODYsOS41NDYsMjEuMzMzLDIxLjMzMywyMS4zMzNoODEuODEyYzUuNjg1LDAsMTEuMTM2LTIuMjYxLDE1LjE0Ni02LjI5Mw0KCWwzMC45MzMtMzEuMzU5VjQ1MS4wN3ogTTI4Ni4xODcsMjc2Ljg4N2gtNTEuNTE5di01MS41MTlsMTc1Ljk5Ni0xNzMuNjVsNDkuODEyLDQ5LjI3OUwyODYuMTg3LDI3Ni44ODd6Ii8+DQo8Zz4NCgk8cmVjdCB4PSI5NS45OTQiIHk9IjI3Ni44ODciIHN0eWxlPSJmaWxsOiNDQ0NDRkY7IiB3aWR0aD0iNjMuOTk5IiBoZWlnaHQ9IjQyLjY2NiIvPg0KCTxyZWN0IHg9Ijk1Ljk5NCIgeT0iMzUxLjU1MiIgc3R5bGU9ImZpbGw6I0NDQ0NGRjsiIHdpZHRoPSIxOTEuOTk2IiBoZWlnaHQ9IjQyLjY2NiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
							</Link>
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
				<div className="final-price">TOTAL: <span>{totalPrice.toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</span></div>
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
<>
			<div className="list-cart-box">
				<ul>
					<li>Eliminar</li>
					<li>Editar</li>
					<li>Producto</li>
					<li>Cantidad</li>
					<li>Precio</li>
					<li>Total</li>
				</ul>
				<ItemCartList />
			</div>
			<Link to="checkout" className="finalizar-compra">
				<button className="btn btn-effect">Finalizar compra</button>
			</Link>
			</>
			}
		</>}
	</>
}

export default CartView