import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent';
import { Divider, Form, Image, message, Radio, Typography } from 'antd';
import logo from '../../assets/images/logo.png';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/UserService';

const SignUpPage = () => {
	const { form } = Form.useForm();
	const navigate = useNavigate();

	const handleSignUp = async (values) => {
		const result = await signUp(values);
		if(result.status === 'OK'){
			message.success("Đăng ký thành công!")
			navigate('/login')
		}
		console.log(result);
	}

	return (
		<div className='signup-container'>
			<Form
				form={ form }
				className='signup-form'
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 18,
				}}
				labelWrap
				labelAlign="left"
				colon={false}

				onFinish={handleSignUp}
			>
				<Link to={'/'}>
						<Image src={logo} preview={false} />
				</Link>
				<Typography.Title style={{ textAlign: 'center', color: "#001433" }}>ĐĂNG KÝ</Typography.Title>
				<Form.Item
					label="Họ và tên"
					name="name"
					className='custom-label'
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập họ và tên',
						},
					]}
				>
					<InputComponent
						placeholder={"Họ và tên"}
					>
					</InputComponent>
				</Form.Item>
				<Form.Item
					label="Email"
					name='email'
					className='custom-label'
					rules={[
						{
							required: true,
							type: 'email',
							message: 'Vui lòng nhập email',
						},
					]}
				>
					<InputComponent
						placeholder={"Email"}
					>
					</InputComponent>
				</Form.Item>
				<Form.Item
					label="Số điện thoại"
					name="phone"
					className='custom-label'
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập số điện thoại',
						},
					]}
				>
					<InputComponent
						placeholder={"Số điện thoại"}
					>
					</InputComponent>
				</Form.Item>

				<Form.Item
					label="Mật khẩu"
					name="password"
					className='custom-label'
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập mật khẩu',
						},
					]}
				>
					<InputComponent
						placeholder={"Mật khẩu"}
					>
					</InputComponent>
				</Form.Item>
				<Form.Item
					label="Xác nhận mật khẩu"
					name="confirmPassword"
					className='custom-label'
					dependencies={['password']}
					rules={[
						{
							required: true,
							message: "Vui lòng nhập xác nhận mật khẩu"
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('Mật khẩu không khớp!'));
							},
						}),
					]}
				>
					<InputComponent
						placeholder={"Xác nhận mật khẩu"}
					>
					</InputComponent>
				</Form.Item>
				<Form.Item 
					label='Bạn là'
					name='role'
					className='custom-label'
					rules={[
						{
							required: true,
							message: 'Vui lòng chọn vai trò của bạn',
						},
					]}
				>
						<Radio.Group>
								<Radio value='field_owner'>Chủ sân</Radio>
								<Radio value='customer'>Người thuê sân</Radio>
						</Radio.Group>
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 4,
						span: 16,
					}}
				>
					<ButtonComponent
						type={'primary'}
						text={"Đăng ký"}
						size={"large"}
						htmlType={'submit'}
						block
					>
					</ButtonComponent>
				</Form.Item>

				<div className='options'>
					<span>Bạn đã có tài khoản?</span>
					<a href='/login' style={{ color: "#001433" }}>Đăng nhập</a>
				</div>
				<Divider></Divider>
				<span style={{ fontStyle: 'italic' }}>
					<span style={{ color: '#ff4d4f', fontSize: '14px', fontFamily: 'SimSun, sans-serif', lineHeight: 1, marginRight: "4px" }}>*</span>
					là các trường bắt buộc
				</span>
			</Form>
		</div>
	)
}

export default SignUpPage