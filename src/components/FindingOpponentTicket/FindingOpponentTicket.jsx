import React, { useState } from 'react'
import { Card, Typography, Tag, Row, Col, Divider, Button, Modal } from 'antd';
import { CalendarOutlined, FieldTimeOutlined, EnvironmentOutlined, DollarOutlined, QrcodeOutlined } from '@ant-design/icons';
import { convertToVietnamTime } from '../../utils/time';
import { useSelector } from 'react-redux';
import { getPaymentByBookingId, createTransactionZaloPay } from '../../services/PaymentService';

const { Title, Text } = Typography;

const FindingOpponentTicket = ({ booking }) => {
	const {
		_id,
		bookingTime,
		field,
		totalPrice,
		customer
	} = booking;
	console.log(booking)

	const user = useSelector((state) => state.user)
	const isDisableCard = user.name === customer.name;

	const matchPrice = Math.round(totalPrice / 2);

	const date = convertToVietnamTime(bookingTime.startTime).format('DD/MM/YYYY')
	const startTime = convertToVietnamTime(bookingTime.startTime).format('HH:mm');
	const endTime = convertToVietnamTime(bookingTime.endTime).format('HH:mm');

	const [isShowModal, setIsShowModal] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleMatchOpponent = async () => {
		setConfirmLoading(true)
		const payment = await getPaymentByBookingId(_id);
		if (payment?.status === 'OK') {
			const zaloResponse = await createTransactionZaloPay({
				user: user.id,
				amount: matchPrice,
				payment: payment.data._id,
				isFindingOpponentType: true
			})

			if (zaloResponse.return_code === 1) {
				window.location.href = zaloResponse.order_url;
			}

			console.log(zaloResponse)
		}
		setConfirmLoading(false)
		console.log(payment)
	}

	const handleOpenModal = () => {
		setIsShowModal(true)
	}

	const handleCancelModal = () => {
		setIsShowModal(false)
	}

	return (
		<Card
			style={{
				border: '1px solid #E77715',
				borderRadius: 16,
				boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
				padding: 24,
				background: '#fffaf2',
				margin: '16px 32px',
				width: '400px'
			}}
		>
			<Modal
				title="Xác nhận ghép đối thủ?"
				okText='Đồng ý'
				cancelText='Hủy bỏ'
				open={isShowModal}
				onCancel={handleCancelModal}
				confirmLoading={confirmLoading}
				onOk={handleMatchOpponent}
			>
				<Row gutter={[16, 16]}>
					<Col span={24}>
						<Title level={4} style={{ marginBottom: 4, color: '#d46b08' }}>{field.name}</Title>
						<Text type="secondary"><EnvironmentOutlined /> {field.address}</Text>
					</Col>
					<Col span={12}>
						<Text strong><CalendarOutlined /> Ngày: </Text>
						<Text>{date}</Text>
					</Col>
					<Col span={12}>
						<Text strong><FieldTimeOutlined /> Giờ: </Text>
						<Text>{startTime} - {endTime}</Text>
					</Col>
					<Col span={24}>
						<Text type="secondary" style={{ fontSize: 14 }} strong>Đối thủ: {customer.name}</Text>
					</Col>
					<Divider></Divider>
					<Col span={24}>
						<DollarOutlined style={{ fontSize: '20px', marginRight: '8px' }} />
						<Text style={{ fontSize: '16px' }}>Bạn cần thanh toán
							<span style={{ color: '#d46b08', fontWeight: 'bold' }}> {matchPrice.toLocaleString()} VNĐ </span>
							để xác nhận ghép đối thủ
						</Text>
					</Col>
				</Row>
			</Modal>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Tag color="volcano" style={{ fontSize: 16 }}>
							{/* <QrcodeOutlined /> Mã vé: {_id} */}
							<Text type="secondary" style={{ fontSize: 14 }} strong>Người đặt: {customer.name}</Text>
						</Tag>
					</div>
					<Divider style={{ margin: '8px 0' }} />
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
					<Text strong><DollarOutlined /> Giá vé:</Text><br />
					<Text style={{ fontSize: 18, color: '#cf1322' }}>{totalPrice.toLocaleString()} VNĐ</Text>
				</Col>

				<Col span={24}>
					<Button
						type='primary'
						block
						disabled={isDisableCard}
						onClick={handleOpenModal}
					>
						Ghép đối
					</Button>
				</Col>
			</Row>
		</Card>
	);
};

export default FindingOpponentTicket