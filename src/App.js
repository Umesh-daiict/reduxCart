import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Notification from './components/UI/Notification';
import { fetchFromCart, sendToCart } from './store/cart-action';
let initF = true;
function App() {
	const display = useSelector((state) => state.ui.display);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.Note);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFromCart());
	}, [dispatch]);

	useEffect(() => {
		if (initF) {
			initF = false;
			return;
		}
		if (cart.changed)
			dispatch(sendToCart({ items: cart.items, total: cart.total }));
	}, [cart, dispatch]);
	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{display && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
