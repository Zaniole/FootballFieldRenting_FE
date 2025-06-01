import api from './api'

export const createBooking = async (data) => {
	const res = await api.post('/booking', data)
	return res.data;
}

export const getBookingByUserId = async (id) => {
	const res = await api.get(`/booking/user/${id}`)
	return res.data;
}

export const getAllBooking = async () => {
	const res = await api.get('/booking/')
	return res.data;
}