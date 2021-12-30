import React, { useEffect, useState } from 'react';
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css'
import Brand from './Brand';
import CartWidget from './CartWidget';

function Menu() {
	const [ categories, setCategories ] = useState();

	useEffect(() => {
		const db = getFirestore();
		const categoryItems = db.collection('categoryItems').orderBy('categoryId')
		categoryItems.get().then(querySnapshot => {
			if(querySnapshot.size === 0) console.log('No results')
			setCategories(querySnapshot.docs.map(doc => doc.data().categoryId))
		})
	}, [])

	return (
		<ul className="ulStyles">
			<li>
				<div className="dropdown">
					<div className="dropdown-select">
						<span className="select">Categorias</span>
						<i className="fa fa-caret-down icon"></i>
					</div>
					<div className="dropdown-list">
						{categories && categories.map(i => {
							return <div key={i} className="dropdown-list__item">
									<Link to={`/category/${i}`}>{i}</Link>
								</div>
						})}
					</div>
				</div>
			</li>
			<Link to="/404">Promociones</Link>
			<Link to="/404">Vender</Link>
			<Link to="/404">Ayuda</Link>
		</ul>
	)
}

function NavBar() {
	return <>
		<nav className="navBar">
			<Brand />
			<Menu />
			<CartWidget />
		</nav>

	</>
}

export default NavBar;