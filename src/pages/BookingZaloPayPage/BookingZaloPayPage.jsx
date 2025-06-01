import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Result, Button } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { updatePaymentStatus } from '../../services/PaymentService';
import './style.css'

const BookingZaloPayPage = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const status = queryParams.get("status");
	const paymentId = queryParams.get("payment_id");

	const [result, setResult] = useState({
		title: '',
		subTitle: '',
		icon: null
	})

	useEffect(() => {
		if (status === '1') {
			setResult({
				title: "Đặt sân thành công",
				subTitle: "Cảm ơn bạn đã sử dụng dịch vụ. Thông tin đặt sân đã được ghi nhận.",
				icon: <CheckCircleTwoTone twoToneColor="#E77715" />
			})
		} else {
			setResult({
				title: "Đặt sân không thành công",
				subTitle: "Lỗi đặt sân. Vui lòng thử lại",
				icon: <CloseCircleTwoTone twoToneColor='#ff4d4f' />
			})

			const updatePayment = async (paymentId) => {
				await updatePaymentStatus(paymentId, { status: 'failed' })
			}

			updatePayment(paymentId);
		}
	}, [status, paymentId])

	const handleBackHomePage = () => {
		navigate('/')
	}
	const handleNavigateBookingHistory = () => {
		navigate('/booking-history')
	}

	return (
		<div style={{ backgroundColor: '#f8f8f8', minHeight: '100vh', padding: '60px 20px', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
			<div className='result-container'>
				<Result
					icon={result.icon}
					title={result.title}
					subTitle={result.subTitle}
					extra={[
						<Button key="home" type="primary" onClick={handleBackHomePage} style={{ backgroundColor: '#E77715', borderColor: '#E77715' }}>
							Về trang chủ
						</Button>,
						<Button key="bookings" onClick={handleNavigateBookingHistory}>
							Xem lịch sử đặt sân
						</Button>
					]}
				/>
			</div>
		</div>
	)
}

export default BookingZaloPayPage