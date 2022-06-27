import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
	name: 'ui',
	initialState: { display: false, Note: null },
	reducers: {
		toogle(state) {
			state.display = !state.display;
		},
		showNotification(state, action) {
			state.Note = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});
export const uiAction = uiSlice.actions;
export default uiSlice;
