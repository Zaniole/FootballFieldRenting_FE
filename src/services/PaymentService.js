import api from './api'

export const createPayment = async (data) => {
	const res = await api.post('/payment', data)
	return res.data;
}

export const updatePaymentStatus = async (id, data) => {
	const res = await api.put(`/payment/${id}`, data);
	return res.data;
}

export const cancelPayment = async (id) => {
	const res = await api.post(`payment/${id}`,)
	return res.data;
}

export const getPaymentByBookingId = async (bookingId) => {
	const res = await api.get(`payment/${bookingId}`);
	return res.data;
}

//ZaloPay Services
export const createTransactionZaloPay = async (data) => {
	const res = await api.post('/payment/zalopay', data)
	return res.data;
}