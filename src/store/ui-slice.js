import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
	name: 'ui',
	initialState: { display: false },
	reducers: {
		toogle(state) {
			state.display = !state.display;
		},
	},
});
export const uiAction = uiSlice.actions;
export default uiSlice;
