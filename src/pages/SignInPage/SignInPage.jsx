import React from 'react';
import { useState } from "react";
import { GoogleOutlined } from '@ant-design/icons';
import { Divider, Form, message, Typography, Input, Flex, Checkbox, Image } from 'antd';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent';
import logo from '../../assets/images/logo.png';
import { loginUser, getDetailUser } from '../../services/UserService';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import './style.css'
import { updateUser } from '../../redux/slices/userSlice';

const SignInPage = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async (values) => {
		const result = await loginUser({
			email: values.email,
			password: values.password
		});

		if (result?.status === "OK") {
			navigate('/');
			message.success("Đăng nhập thành công");
			if(result?.accessToken){
				const decoded = jwtDecode(result?.accessToken)
				if(decoded?.payload?.id){
					handleGetUserDetail(decoded?.payload?.id, result?.accessToken);
				}
			}
		} else {
			message.error("Email hoặc mật khẩu không chính xác")
		}
	}

	const handleGetUserDetail = async (id, token) => {
		const res = await getDetailUser(id, token);
		dispatch(updateUser({ accessToken: token, ...res?.data}))
	}

	const handleLoginGoogle = () => {
		message.success("Đăng nhập thành công");
	}

	return (
		<div className='login-container'>
			<Form
				form={form}
				className='login-form'
				onFinish={handleLogin}
			>
				<Link to={'/'}>
						<Image src={logo} preview={false} />
				</Link>
				<Typography.Title style={{ color: "#001433", textAlign: "center" }}>ĐĂNG NHẬP</Typography.Title>
				<Form.Item
					name={'email'}
					rules={[
						{
							required: true,
							type: 'email',
							message: 'Vui lòng nhập email',
						},
					]}
				>
					<InputComponent
						size={"large"}
						placeholder={"Email"}
					>
					</InputComponent>
				</Form.Item>
				<Form.Item
					name={'password'}
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập mật khẩu của bạn',
						},
					]}
				>
					<Input.Password
						size={"large"}
						placeholder={"Mật khẩu"}
						visible={"true"}
					>
					</Input.Password>
				</Form.Item>
				<Form.Item>
					<Flex justify='space-between' align='center'>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Ghi nhớ tài khoản của tôi</Checkbox>
						</Form.Item>
						<a href="/reset-password" style={{ color: "#001433" }}>Quên mật khẩu</a>
					</Flex>
				</Form.Item>
				<Form.Item>
					<ButtonComponent
						type={'primary'}
						text={"Đăng nhập"}
						size={"large"}
						styleButton={{ margin: '4px 0px 0px 0px' }}
						htmlType={"submit"}
						block
					/>
				</Form.Item>
				<Divider style={{ color: '#001433' }}>Hoặc</Divider>
				<div>
					<ButtonComponent
						type={'primary'}
						text={"Đăng nhập bằng Google"}
						size={"large"}
						icon={<GoogleOutlined />}
						styleButton={{ margin: '0px 0px 4px 0px', background: '#001433' }}
						onClick={handleLoginGoogle}
						block
					>
					</ButtonComponent>
				</div>

				<div className='options'>
					<p>Chưa có tài khoản?</p>
					<a href='/signup' style={{ color: "#b70505" }}>Đăng ký ngay</a>
				</div>
			</Form>
		</div>
	)
}

export default SignInPage