import React, { useEffect, useState } from 'react'

import HeroComponent from '../../components/HeroComponent/HeroComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import background3 from '../../assets/images/background3.jpg'
import { Button, Flex, Typography } from 'antd';
import './style.css'
import { getAllField } from '../../services/FieldService';
import { getAllBooking } from '../../services/BookingService';
import FindingOpponentTicket from '../../components/FindingOpponentTicket/FindingOpponentTicket';
const { Title, Paragraph } = Typography;

const HomePage = () => {
	const [fields, setFields] = useState([]);
	const [opponentBookings, setOpponentBookings] = useState([]);

	useEffect(() => {
		// Load danh sách sân bóng
		const fetchFields = async () => {
			const res = await getAllField();
			setFields(res.data.slice(0, 5)); // chỉ lấy 5 sân
		};

		// Load các vé cần tìm đối thủ
		const fetchBookings = async () => {
			const res = await getAllBooking();
			const filtered = res.data.filter(b => b.findingOpponent);
			setOpponentBookings(filtered.slice(0, 5)); // chỉ lấy 5 vé
		};

		fetchFields();
		fetchBookings();
	}, []);

	console.log(background3)
	return (
		<div>
			<HeroComponent />
			{/* Section 1: Danh sách sân bóng */}
			<div style={{ padding: '32px 24px', marginTop: 0, backgroundColor: '#fff' }}>
				<Title level={2}>⚽ Danh sách sân bóng</Title>
				<Flex wrap gap="large" justify='space-around' style={{ paddingTop: '24px'}}>
					{fields.map(field => (
						<CardComponent key={field._id} stadiumData={field} />
					))}
				</Flex>
			</div>

			{/* Section 2: Vé đặt sân đang tìm đối */}
			<div style={{ padding: '16px 24px', marginTop: 40}}>
				<Title level={2}>👥 Vé đang tìm đối</Title>
				<Paragraph type="secondary">Tham gia ghép đội với những người đang cần đối thủ ngay hôm nay!</Paragraph>
				<Flex wrap gap="large" justify='start'>
					{opponentBookings.map(booking => (
						<FindingOpponentTicket key={booking._id} booking={booking} />
					))}
				</Flex>
			</div>

			{/* Section 3: CTA quảng cáo đăng ký sân */}
			<div style={{
				backgroundImage: `url(${background3})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				marginTop: 80,
				padding: '80px 24px',
				textAlign: 'center',
				borderTop: '2px solid #E77715'
			}}>
				{/* <Title level={2} colorText='#fff'>📢Bạn có sân bóng cần cho thuê?</Title>
				<Paragraph style={{ fontSize: 16, maxWidth: 600, margin: 'auto' }}>
					Đăng ký sân bóng của bạn lên hệ thống của chúng tôi để tiếp cận hàng ngàn người chơi mỗi ngày.
				</Paragraph>
				<Button type="primary" size="large" href="/register-field">
					Đăng ký sân ngay
				</Button> */}
				<h2 style={{ fontSize: 32, color: 'white' }}>📢 Bạn có sân bóng?</h2>
				<p style={{ fontSize: 18, maxWidth: 600, margin: '60px auto', color: 'white' }}>
					Tham gia hệ thống của chúng tôi để tăng lượng khách và quản lý sân dễ dàng hơn!
				</p>
				<button style={{
					backgroundColor: 'white',
					borderColor: '#E77715',
					color: '#E77715',
					padding: '12px 24px',
					fontSize: 16,
					borderRadius: 8,
					cursor: 'pointer'
				}}>
					Đăng ký ngay
				</button>
			</div>
		</div>
	)
}

export default HomePage