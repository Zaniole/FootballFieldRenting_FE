import React from 'react';
import { Result, Button, Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './style.css'

const { Paragraph, Text } = Typography;

const BookingSuccessPage = () => {
	const navigate = useNavigate();

	const handleBackHomePage = () => {
		navigate('/')
	}
	return (
		<div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '60px 20px', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
			<div className='result-container'>
				<Result
					icon={<CheckCircleTwoTone twoToneColor="#E77715" />}
					title="Đặt sân thành công!"
					subTitle="Cảm ơn bạn đã sử dụng dịch vụ. Thông tin đặt sân đã được ghi nhận."
					extra={[
						<Button key="home" type="primary" onClick={handleBackHomePage} style={{ backgroundColor: '#E77715', borderColor: '#E77715' }}>
							Về trang chủ
						</Button>,
						<Button key="bookings">
							Xem lịch sử đặt sân
						</Button>
					]}
				/>
			</div>
		</div>
	);
};

export default BookingSuccessPage;
