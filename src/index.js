import { h, render } from 'preact';
import './styles/global-style.js';
import { Default } from './pages/Default.jsx';


const App = () => {

	return (
		<div>
			<Default />
		</div>
	);

};

render( <App />, document.getElementById( 'app' ) );
