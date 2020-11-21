import React, { useState } from 'react';

export const CartContext = React.createContext();

function CartProvider({ children, defaultCart }) {
	const [cart, setCart] = useState(defaultCart)
	const [totalPrice, setTotalPrice] = useState(0)
	console.table(cart)

/* ---------------------- agrega un producto al carrito --------------------- */
const addItem = (item, quantity) => {
	const { id: itemId } = item;
	const existeProd = findProd(itemId);//busca el producto
	console.log(existeProd)
	//lógica incorporada de no aceptar duplicados
	if(existeProd) {//si existe lo actualiza
		existeProd.quantity = quantity;
		existeProd.totalXprod = (quantity * item.price)

		console.log(existeProd.quantity);
		console.log(existeProd.totalXprod);

		setCart([...cart])
	} else {//si no existe lo guarda en el setCart
		let totalXprod = quantity * parseFloat(item.price);
		setCart([...cart, {item, quantity, totalXprod}]);//guarda el prod en el array cart
	}
}

/* ---------------- remueve un item del cart por usando su id --------------- */
	const removeItem = itemId => {
		let nuevoCart = cart.filter(prod => prod.item.id !== itemId);
		updateTotal(itemId)
		setCart(nuevoCart)
	}

/* ------------------------- remover todos los items ------------------------ */
	const clear = () => {
		setCart([])//vacia el carrito
		setTotalPrice(0)//vacia el precio-total-final acumulado
	}

/* --------------------- actualiza el precio-total-final -------------------- */
	const updateTotal = itemId => {
		let precio = findProd(itemId);//busca el producto
		setTotalPrice([totalPrice - precio.totalXprod]);//resta el precio total del prod con el precio-total-final
	}
/* ------------------ suma los precios en total del carrito ----------------- */
	const calculoTotal = () => {
		if (cart.length > 0) {
			setTotalPrice(0)
			//suma el array totalPrice para calcular el precio-total-final
			let value = cart.reduce((acc, val) => {
				return acc + val.totalXprod
			}, 0)
			setTotalPrice(value);//guarda el precio-total-final
		}
	}

/* ------------------------- funcion buscar producto ------------------------ */
	const findProd = itemId => cart.find(prod => prod.item.id === itemId);

/* -------------------------------------------------------------------------- */

	return <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalPrice, calculoTotal }}>
		{children}
	</CartContext.Provider>
};

export default CartProvider;