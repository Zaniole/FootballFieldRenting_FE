import React, { useEffect, useState } from 'react'
import { Typography, Flex } from 'antd';
import { getAllBooking } from '../../services/BookingService';
import FindingOpponentTicket from '../../components/FindingOpponentTicket/FindingOpponentTicket';
const { Title } = Typography;

const FindingOpponentPage = () => {
	const [bookingList, setBookingList] = useState([]);

	useEffect(() => {
		async function getBooking() {
			try {
				const res = await getAllBooking();
				const allBookings = res.data;

				const filteredBookings = allBookings.filter(item => item.findingOpponent === true);

				setBookingList(filteredBookings);
			} catch (err) {
				console.error('Error fetching bookings:', err);
			}
		}
		getBooking();
	}, [])
	return (
		<div style={{padding: '8px 32px'}}>
			<Title level={2}>Danh sách vé sân tìm đối</Title>
			<Flex wrap>
				{bookingList.map((booking) => (
					<FindingOpponentTicket key={booking._id} booking={booking}></FindingOpponentTicket>
				))}
			</Flex>
		</div>
	)
}

export default FindingOpponentPage