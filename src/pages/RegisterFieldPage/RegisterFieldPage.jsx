import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Select, Radio, Button, Typography, Upload, Flex, Card, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const RegisterFieldPage = ({ onFinish }) => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (user?.accessToken === "") {
			navigate('/login')
			message.info('Bạn cần đăng nhập để sử dụng chức năng này!')
		}
	}, [])

	const [form] = Form.useForm();
	const [imageUrl, setImageUrl] = useState(null);

	const handleImageChange = ({ file }) => {
		const reader = new FileReader();
		reader.onload = () => {
			setImageUrl(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div className='booking-container'>
			<Title>THÊM SÂN BÓNG MỚI</Title>
			<Flex gap="middle" justify='space-evenly' align='flex-start'>
				<Card
					title="Xem trước hình ảnh sân"
					className='booking-card'
					style={{ width: 480 }}
					cover={imageUrl && <img alt="Preview" src={imageUrl} />}
				>
					<p>Ảnh sẽ hiển thị ở đây sau khi tải lên</p>
				</Card>

				<Form
					form={form}
					layout="vertical"
					className='booking-form'
					onFinish={onFinish}
				>
					<Title level={2} style={{ color: "#001433", textAlign: "center" }}>Thông tin sân</Title>

					<Form.Item
						name="name"
						label="Tên sân"
						rules={[{ required: true, message: 'Vui lòng nhập tên sân' }]}
					>
						<Input placeholder="VD: Sân Bóng HUST" />
					</Form.Item>

					<Form.Item
						name="address"
						label="Địa chỉ"
						rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
					>
						<Input placeholder="VD: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội" />
					</Form.Item>

					<Form.Item
						name="subField"
						label="Số lượng sân phụ"
						rules={[{ required: true, message: 'Vui lòng nhập số sân phụ' }]}
					>
						<InputNumber min={1} style={{ width: '100%' }} />
					</Form.Item>

					<Form.Item
						name="price"
						label="Giá sân thường (VNĐ)"
						rules={[{ required: true, message: 'Vui lòng nhập giá sân' }]}
					>
						<InputNumber min={0} style={{ width: '100%' }} />
					</Form.Item>

					<Form.Item
						name="goldPrice"
						label="Giá giờ vàng (VNĐ)"
						rules={[{ required: true, message: 'Vui lòng nhập giá giờ vàng' }]}
					>
						<InputNumber min={0} style={{ width: '100%' }} />
					</Form.Item>

					<Form.Item
						label="Thời gian mở cửa"
						style={{ marginBottom: 0 }}
					>
						<Flex gap="small">
							<Form.Item
								name={['openTime', 'startAt']}
								rules={[{ required: true, message: 'Giờ mở cửa?' }]}
							>
								<Input placeholder="HH:mm" />
							</Form.Item>
							<Form.Item
								name={['openTime', 'closeAt']}
								rules={[{ required: true, message: 'Giờ đóng cửa?' }]}
							>
								<Input placeholder="HH:mm" />
							</Form.Item>
						</Flex>
					</Form.Item>

					<Form.Item
						name="description"
						label="Mô tả thêm"
					>
						<Input.TextArea rows={3} placeholder="Thông tin thêm về sân..." />
					</Form.Item>

					<Form.Item
						name="image"
						label="Tải ảnh sân"
						valuePropName="file"
						rules={[{ required: true, message: 'Vui lòng chọn ảnh sân' }]}
					>
						<Upload
							beforeUpload={() => false}
							maxCount={1}
							onChange={handleImageChange}
							accept="image/*"
						>
							<Button icon={<UploadOutlined />}>Chọn ảnh</Button>
						</Upload>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" block size='large'>
							Tạo sân bóng
						</Button>
					</Form.Item>
				</Form>
			</Flex>
		</div>
	);
};

export default RegisterFieldPage