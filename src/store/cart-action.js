import { cartAction } from './cart-slice';
import { uiAction } from './ui-slice';

export const fetchFromCart = (cart) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const res = await fetch(
				'https://test-9b2af-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
			);
			if (!res.ok) {
				throw Error('Could Not update the cart');
			}
			const data = await res.json();
			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(
				cartAction.replaceCart({
					items: cartData.items || [],
					total: cartData.total,
				})
			);
		} catch (er) {
			dispatch(
				uiAction.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching Cart Data Failed ',
				})
			);
		}
	};
};

export const sendToCart = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiAction.showNotification({
				status: 'pending...',
				title: 'sending data...',
				message: 'please wait..',
			})
		);

		const sendRequst = async () => {
			const res = await fetch(
				'https://test-9b2af-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
				{ method: 'PUT', body: JSON.stringify(cart) }
			);
			if (!res.ok) {
				throw Error('Could Not update the cart');
			}
		};
		try {
			await sendRequst();

			dispatch(
				uiAction.showNotification({
					status: 'success',
					title: 'Data Sent Sucessfully!',
					message: 'Your Cart Updated Sucessfully',
				})
			);
		} catch (er) {
			dispatch(
				uiAction.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Errorful Response ',
				})
			);
		}
	};
};
