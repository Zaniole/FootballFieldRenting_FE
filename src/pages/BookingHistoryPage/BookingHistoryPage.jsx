import React, { useEffect, useState } from 'react';
import BookingTicket from '../../components/BookingTicket/BookingTicket';
import { getBookingByUserId } from '../../services/BookingService';
import { useSelector } from 'react-redux';
import { Tabs, Empty, Spin } from 'antd';

const BookingHistoryPage = () => {
	const user = useSelector((state) => state.user);
	const [loading, setLoading] = useState(true);
	const [bookingByStatus, setBookingByStatus] = useState({
		paid: [],
		pending: [],
		completed: [],
		refunded: [],
		cancelled: []
	});

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const res = await getBookingByUserId(user.id);
				const data = res?.data || [];

				// Phân loại theo status
				const statusMap = {
					paid: [],
					pending: [],
					completed: [],
					refunded: [],
					cancelled: []
				};

				data.forEach((item) => {
					const status = item.status;
					if (statusMap[status]) {
						statusMap[status].push(item);
					}
				});

				setBookingByStatus(statusMap);
			} catch (err) {
				console.error("Lỗi khi lấy danh sách booking:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchBookings();
	}, [user.id]);

	const renderBookings = (list) => {
		if (loading) return <Spin />;
		if (list.length === 0) return <Empty description="Không có vé nào" />;
		return list.map((booking) => (
			<BookingTicket key={booking._id} booking={booking} />
		));
	};

	const items = [
		{
			key: 'paid',
			label: 'Vé đã thanh toán (chưa sử dụng)',
			children: renderBookings(bookingByStatus.paid),
		},
		{
			key: 'pending',
			label: 'Vé chờ thanh toán',
			children: renderBookings(bookingByStatus.pending),
		},
		{
			key: 'completed',
			label: 'Vé đã sử dụng',
			children: renderBookings(bookingByStatus.completed),
		},
		{
			key: 'refunded',
			label: 'Vé đã hoàn tiền',
			children: renderBookings(bookingByStatus.refunded),
		},
		{
			key: 'cancelled',
			label: 'Vé đã hủy',
			children: renderBookings(bookingByStatus.cancelled),
		}
	];

	return (
		<div style={{ padding: 20 }}>
			<Tabs defaultActiveKey="paid" items={items} />
		</div>
	);
};

export default BookingHistoryPage;
