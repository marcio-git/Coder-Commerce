import { Link } from 'react-router-dom';

function EmptyCartView() {
	return (
	<section style={{ margin: '2%' }}>
		<img src='/images/emptyCart.png' style={{ display: 'block', margin: 'auto' }} alt="" />
		<h1 style={{ textAlign: 'center', fontSize: '3em' }}>Empty Cart</h1>
		<div style={{ textAlign: 'center', fontSize: '1.5em', paddingTop: '10vh' }}>
			<Link to="/">← Ir a Página Principal</Link>
		</div>
	</section>
	)
};

export default EmptyCartView;