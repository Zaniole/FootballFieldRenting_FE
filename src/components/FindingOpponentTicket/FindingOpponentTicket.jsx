import React from 'react'
import { Card, Typography, Tag, Row, Col, Divider, Button } from 'antd';
import { CalendarOutlined, FieldTimeOutlined, EnvironmentOutlined, DollarOutlined, QrcodeOutlined } from '@ant-design/icons';
import { convertToVietnamTime } from '../../utils/time';

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

	const date = convertToVietnamTime(bookingTime.startTime).format('DD/MM/YYYY')
	const startTime = convertToVietnamTime(bookingTime.startTime).format('HH:mm');
	const endTime = convertToVietnamTime(bookingTime.endTime).format('HH:mm');

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
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Tag color="volcano" style={{ fontSize: 16 }}>
							{/* <QrcodeOutlined /> Mã vé: {_id} */}
							<Text type="secondary" style={{ fontSize: 14 }} strong>Người đặt: {customer.name}</Text>
						</Tag>
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

				<Col span={24}>
					<Button type='primary' block>Ghép đối</Button>
				</Col>
			</Row>
		</Card>
	);
};

export default FindingOpponentTicket