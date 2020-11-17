import React, { useState } from 'react';

export const CartContext = React.createContext();

function CartProvider({ children, defaultCart }) {
	const [cart, setCart] = useState(defaultCart)
	console.table(cart)

/* ---------------------- agrega un producto al carrito --------------------- */
	const addItem = (item, quantity) => {
		const { id: itemId } = item;
		preventDuplicates(item, itemId, quantity)
	}
	
	/* --------------- lógica incorporada de no aceptar duplicados -------------- */
	const preventDuplicates = (item, itemId, quantity) => {
		const existeProd = findProd(itemId);//busca el producto
		if(existeProd) {
			//si existe lo actualiza
			existeProd.quantity = quantity;
			existeProd.totalXprod = (quantity * parseFloat(item.price))

			console.log(existeProd);
			console.log(existeProd.quantity);
			
			console.log(existeProd.totalXprod);
			setCart([...cart])
		} else {
			let totalXprod = quantity * parseFloat(item.price);
			setCart([...cart, {item, quantity, totalXprod}]);//guarda el prod en el array cart
		}
 }

/* ---------------- remueve un item del cart por usando su id --------------- */
	const removeItem = itemId => {
		let nuevoCart = cart.filter(prod => prod.item.id !== itemId);
		setCart(nuevoCart)
	}

/* ------------------------- remover todos los items ------------------------ */
	const clear = () => {
		setCart([])//vacia el carrito
		console.log(cart)
	}

/* ------------------------- funcion buscar producto ------------------------ */
	const findProd = itemId => cart.find(prod => prod.item.id === itemId);

/* -------------------------------------------------------------------------- */

	return <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
		{children}
	</CartContext.Provider>
};

export default CartProvider;