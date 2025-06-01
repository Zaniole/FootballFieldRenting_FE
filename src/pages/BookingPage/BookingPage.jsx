import React from 'react'
import { Card, Flex, Form, Input, message, Radio, Select, Typography } from 'antd'
import InputComponent from '../../components/InputComponent/InputComponent'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { generateTimeSlots, isGoldTimeSlot, generateNext7Days, convertToDate } from '../../utils/time'
import './style.css'
import { useSelector } from 'react-redux'
import { createBooking } from '../../services/BookingService'
import { createPayment, createTransactionZaloPay } from '../../services/PaymentService'

const BookingPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { form } = Form.useForm();
	const stadium = location.state?.stadium;
	const user = useSelector((state) => state.user);
	const { startAt, closeAt } = stadium?.openTime;
	const timeSlots = generateTimeSlots(startAt, closeAt);

	const handleConfirmBooking = async (values) => {
		const bookingTime = convertToDate(values.time, values.date);
		const bookingData = {
			customer: user.id,
			field: stadium._id,
			totalPrice: values.totalPrice,
			findingOpponent: values.isFindingOpponent,
			bookingTime: bookingTime
		}
		const newBooking = await createBooking(bookingData);
		if (newBooking.status === 'OK') {
			await handleCreatePayment(values.paymentMethod, newBooking)
		} else {
			message.error('Đặt sân thất bại, vui lòng thử lại')
		}
	}

	const handleCreatePayment = async (paymentMethod, booking) => {
		const bookingId = booking?.data._id;
		const customerId = booking?.data.customer;
		const amount = booking?.data.totalPrice;

		const newPayment = await createPayment({
			bookingId: bookingId,
			customerId: customerId,
			amount: amount,
			paymentMethod: paymentMethod
		})
		console.log(newPayment)

		if (paymentMethod === 'later-pay') {
			console.log('newPayment:', newPayment);
			navigate('/booking-success')
		}
		else {
			await handleZalopayPayment(customerId, amount, newPayment?.data._id)
		}
	}

	const handleZalopayPayment = async (user, amount, payment) => {
		const zaloResponse = await createTransactionZaloPay({
			user: user,
			amount: amount,
			payment: payment
		})

		if (zaloResponse.return_code === 1) {
			window.location.href = zaloResponse.order_url;
		}

		console.log(zaloResponse)
	}

	return (
		<div className='booking-container'>
			<Typography.Title>ĐẶT SÂN</Typography.Title>
			<Flex
				gap="middle"
				justify='space-evenly'
				align='center'
			>
				<Card
					title={stadium?.name}
					className='booking-card'
					style={{ width: 480 }}
					cover={<img alt="Hình ảnh sân" src={stadium?.image} />}
				>
					<p>Địa chỉ: {stadium?.address}</p>
					<p>Giá sân: {stadium?.price}</p>
					<p>Giá sân giờ đẹp: {stadium?.goldPrice}</p>
				</Card>
				<Form
					className='booking-form'
					form={form}
					onFinish={handleConfirmBooking}
				>
					<Typography.Title level={2} style={{ color: "#001433", textAlign: "center" }}>Vé đặt sân</Typography.Title>
					<Form.Item
						label='Chọn ngày'
						name='date'
						required
						rules={[
							{
								required: true,
								message: 'Vui lòng chọn ngày đặt sân',
							},
						]}
					>
						<Select options={generateNext7Days()} />
					</Form.Item>
					<Form.Item
						label='Chọn khung giờ chơi'
						name='time'
						required
						rules={[
							{
								required: true,
								message: 'Vui lòng chọn khung giờ đặt sân'
							}
						]}
					>
						<Select
							options={timeSlots}
						/>
					</Form.Item>

					<Form.Item
						shouldUpdate={(prev, current) => prev.time !== current.time}
					>
						{({ getFieldValue, setFieldsValue }) => {
							const time = getFieldValue('time');

							const isGoldTime = isGoldTimeSlot(time);
							const totalPrice = isGoldTime ? stadium.goldPrice : stadium.price;

							if (getFieldValue('totalPrice') !== totalPrice) {
								setFieldsValue({ totalPrice });
							}

							return (
								<Form.Item label="Giá tiền" name="totalPrice"
									shouldUpdate={(prev, current) => prev.time !== current.time}
									getValueProps={value => ({
										value: value ? `${value} Việt Nam đồng` : '',
									})}
								>
									<Input
										disabled
										style={{ backgroundColor: '#fff', color: '#E77715', fontSize: '16px' }}

									/>
								</Form.Item>
							);
						}}
					</Form.Item>

					<Form.Item
						label='Hình thức thanh toán'
						name='paymentMethod'
						required
						rules={[
							{
								required: true,
								message: 'Vui lòng chọn hình thức thanh toán'
							}
						]}
					>
						<Radio.Group>
							<Radio value='later-pay'>Thanh toán sau (Tiền mặt)</Radio>
							<Radio value='zalopay'> Thanh toán ZaloPay</Radio>
							<Radio value='half-pay'> Cọc tiền sân và Thanh toán phần còn lại sau (ZaloPay)</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						noStyle
						shouldUpdate={(prevValues, currentValues) =>
							prevValues.paymentMethod !== currentValues.paymentMethod
						}
					>
						{({ getFieldValue, setFieldsValue }) => {
							const isDisabled = getFieldValue('paymentMethod') === 'later-pay';

							// Nếu bị disabled, set lại giá trị false
							if (isDisabled && getFieldValue('isFindingOpponent') !== false) {
								setFieldsValue({ isFindingOpponent: false });
							}

							return (
								<Form.Item
									label="Tìm đối thủ trên hệ thống?"
									name="isFindingOpponent"
								>
									<Radio.Group disabled={isDisabled}>
										<Radio value={true}>Có</Radio>
										<Radio value={false}>Không</Radio>
									</Radio.Group>
								</Form.Item>
							);
						}}
					</Form.Item>
					<ButtonComponent
						type={'primary'}
						text={"Xác nhận đặt sân"}
						size={"large"}
						htmlType={'submit'}
						block
					>
					</ButtonComponent>
				</Form>
			</Flex>
		</div>
	)
}

export default BookingPage