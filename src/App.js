import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
	const display = useSelector((state) => state.ui.display);

	return (
		<Layout>
			{display && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
