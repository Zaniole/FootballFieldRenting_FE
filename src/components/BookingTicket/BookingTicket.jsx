import React, { useState } from 'react';
import { Card, Typography, Tag, Row, Col, Divider, Button, Collapse } from 'antd';
import { CalendarOutlined, FieldTimeOutlined, EnvironmentOutlined, DollarOutlined, QrcodeOutlined } from '@ant-design/icons';
import { convertToVietnamTime } from '../../utils/time';
import { getPaymentByBookingId } from '../../services/PaymentService';

const { Title, Text } = Typography;

const BookingTicket = ({ booking }) => {
	const {
		_id,
		bookingTime,
		field,
		totalPrice,
		createdAt,
		findingOpponent
	} = booking;

	const timeCreated = convertToVietnamTime(createdAt).format('DD/MM/YYYY HH:mm');
	const date = convertToVietnamTime(bookingTime.startTime).format('DD/MM/YYYY')
	const startTime = convertToVietnamTime(bookingTime.startTime).format('HH:mm');
	const endTime = convertToVietnamTime(bookingTime.endTime).format('HH:mm');

	const [paymentInfo, setPaymentInfo] = useState({
		paymentMethod: '',
		amount: '',
	})
	const handleShowPayment = async () => {
		try {
			const payment = await getPaymentByBookingId(_id);
			if (payment.status === 'OK') {
				if (payment.data.paymentMethod === 'later-pay') {
					setPaymentInfo({
						amount: payment.data.amount,
						paymentMethod: 'Thanh toán sau'
					})
				} else if (payment.data.paymentMethod === 'zalopay') {
					setPaymentInfo({
						amount: payment.data.amount,
						paymentMethod: 'Thanh toán qua ZaloPay'
					})
				}
			}
		} catch (error) {
			console.log(error)
		}

	}

	const paymentItem = [{
		key: 'payment',
		label: 'Xem thêm thông tin thanh toán',
		children: <div>
			<p>Hình thức thanh toán: <span style={{color: 'red'}}>{paymentInfo.paymentMethod}</span></p>
			<p>Số tiền thanh toán: <span style={{color: 'red'}}>{paymentInfo.amount} </span>Việt Nam đồng</p>
		</div>
	}]


	return (
		<Card
			style={{
				border: '1px solid #E77715',
				borderRadius: 16,
				boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
				padding: 24,
				background: '#fffaf2',
				margin: '16px 32px'
			}}
		>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Tag color="volcano" style={{ fontSize: 16 }}>
							<QrcodeOutlined /> Mã vé: {_id}
						</Tag>
						<Text type="secondary" style={{ fontSize: 14 }}>
							<CalendarOutlined /> Đặt lúc: {timeCreated}
						</Text>
						<Text type="secondary" style={{ fontSize: 14 }} strong>
							Tìm đối?: {findingOpponent ? <span style={{ color: 'red' }}>Có</span> : 'Không'}
						</Text>
					</div>
					<Divider style={{ margin: '12px 0' }} />
				</Col>

				<Col span={24}>
					<Title level={4} style={{ marginBottom: 4, color: '#d46b08' }}>{field.name}</Title>
					<Text type="secondary"><EnvironmentOutlined /> {field.address}</Text>
				</Col>

				<Col span={12}>
					<Text strong><CalendarOutlined /> Ngày:</Text><br />
					<Text>{date}</Text>
				</Col>
				<Col span={12}>
					<Text strong><FieldTimeOutlined /> Giờ:</Text><br />
					<Text>{startTime} - {endTime}</Text>
				</Col>

				<Col span={24}>
					<Text strong><DollarOutlined /> Giá tiền:</Text><br />
					<Text style={{ fontSize: 18, color: '#cf1322' }}>{totalPrice.toLocaleString()} VNĐ</Text>
				</Col>
				<Col span={12}>
					<Collapse items={paymentItem} onChange={handleShowPayment}></Collapse>
				</Col>
			</Row>
		</Card>
	);
};

export default BookingTicket;
