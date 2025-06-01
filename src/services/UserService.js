import api from "./api";

export const loginUser = async (data) => {
	const res = await api.post(`/user/sign-in`, data);
	return res.data;
}

export const logout = async () => {
	const res = await api.post('/user/logout');
	return res.data;
}

export const signUp = async (data) => {
	const res = await api.post('/user/sign-up', data);
	return res.data;
}

export const getDetailUser = async (id, access_token) => {
	const res = await api.get(`/user/${id}`, {
		headers: {
			token: `Bearer ${access_token}`
		}
	})
	return res.data;
}

