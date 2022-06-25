import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
	name: 'cart',
	initialState: { items: [], total: 0 },
	reducers: {
		addItem(state, action) {
			const newItem = action.payload;
			const itemCarted = state.items.find((item) => item.id === newItem.id);
			if (itemCarted) {
				itemCarted.quantity++;
				itemCarted.totalPrice = itemCarted.totalPrice + newItem.price;
			} else {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					name: newItem.title,
					totalPrice: newItem.price,
				});
			}
			state.total++;
		},
		removeitem(state, action) {
			const id = action.payload;
			const itemCarted = state.items.find((item) => item.id === id);
			if (itemCarted.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				itemCarted.quantity--;
				itemCarted.totalPrice = itemCarted.totalPrice - itemCarted.price;
			}
			state.total--;
		},
	},
});
export const cartAction = cartSlice.actions;
export default cartSlice;
