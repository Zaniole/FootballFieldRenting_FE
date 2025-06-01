import api from './api'

export const getAllField = async () => {
	const res = await api.get('/field')
	return res.data;
}