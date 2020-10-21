import React from 'react';
import '../App.css'
import Brand from './Brand';

function NavBar() {
	return <>
		<nav className="navBar">
			<Brand />
			<ul className="ulStyles">
				<li><a href='/#'>Categorias</a></li>
				<li><a href='/#'>Promociones</a></li>
				<li><a href='/#'>Vender</a></li>
				<li><a href='/#'>Ayuda</a></li>
			</ul>
		</nav>
	</>
}

export default NavBar;