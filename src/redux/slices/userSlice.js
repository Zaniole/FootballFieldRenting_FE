// store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
	name: '',
	email: '',
	phone: '',
	role: 'Guest',
	accessToken: '',
	id: '',
	isAdmin: false
};

// Cấu hình slice
export const userSlice = createSlice({
	name: "user",
	initialState,
	// Reducers chứa các hàm xử lý cập nhật state
	reducers: {
		updateUser: (state, action) => {
			const {
				name = '',
				email = '',
				phone = '',
				role = 'Guest',
				accessToken = '',
				_id = '',
				isAdmin 
			} = action.payload;
			state.name = name ? name : state.name;
			state.email = email ? email : state.email;
			state.phone = phone ? phone : state.phone;
			state.role = role ? role : state.role;
			state.accessToken = accessToken ? accessToken : state.accessToken;
			state.id = _id ? _id : state.id;
			state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
		},
		resetUser: (state) => {
			state.name = '';
			state.email = '';
			state.phone = '';
			state.role = 'Guest';
			state.accessToken = '';
			state.id = '';
			state.isAdmin = false;
		}
	}
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;