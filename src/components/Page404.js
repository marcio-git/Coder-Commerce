import { Link } from 'react-router-dom';

function Page404({ message }) {

	return <div style={{textAlign: 'center'}}>
		<img style={{width: '25%'}} src="https://media.giphy.com/media/26AHs3p7U7H5MU2gU/source.gif"></img>
		<h1>Error 404: {message || 'Page'} not found 😢
			<div style={{ paddingTop: '10vh' }}>
				<Link to="/">← Ir a Página Principal</Link>
			</div>
		</h1>
	</div>
}

export default Page404;