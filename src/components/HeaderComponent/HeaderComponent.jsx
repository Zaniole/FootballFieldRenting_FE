import React from 'react'
import { Col, Image, Flex, Dropdown, Space, Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { ReactComponent as FootballFieldIcon } from '../../assets/images/football-field.svg';
import './style.css'
import { FormOutlined, UserOutlined, LoginOutlined, DownOutlined, EditOutlined, LogoutOutlined, TeamOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/UserService';
import { resetUser } from '../../redux/slices/userSlice';

const HeaderComponent = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user);

	const handleLogout = async () => {
		await logout();
		dispatch(resetUser());
		message.success('Bạn đã đăng xuất')
		navigate('/login')
	}

	const guestMenu = [
		{
			key: 'login',
			label: (
				<Link to={'/login'} className='dropdown-menu-item'>
					<LoginOutlined style={{marginRight: '4px'}}/>
					<span>Đăng nhập</span>
				</Link>
			)
		},
		{
			key: 'sign-up',
			label: (
				<Link to={'/signup'} className='dropdown-menu-item'>
					<EditOutlined style={{marginRight: '4px'}}/>
					<span>Đăng ký</span>
				</Link>
			)
		},
	]

	const userMenu = [
		{
			key: 'profile',
			label: (
				<Link to={'/profile'} className='dropdown-menu-item'>
					Tài khoản của tôi
				</Link>
			)

		},
		{
			key: 'booking-history',
			label: (
				<Link to={'/booking-history'} className='dropdown-menu-item'>
					Lịch sử đặt sân
				</Link>
			)
		},
		{
			key: 'log-out',
			label: (
				<Button onClick={handleLogout}>
					<LogoutOutlined />
					Đăng xuất
				</Button> 
			)
		}
	]

	return (
		<Flex className='header' justify='space-between' align='center'>
			<div className='header-logo'>
				<Image
					src={logo}
					preview={false}
					onClick={() => navigate('/')}
				/>
			</div>
			<Flex justify='space-around' align='center' className='header-main' gap='64px'>
				<Link to={'/stadium'} className='header-main-link'>
						<FootballFieldIcon className='icon' />
						Danh sách sân bóng
				</Link>
				<Link to={'/finding-opponent'} className='header-main-link'>
					<TeamOutlined/>
					<span>Tìm đối thủ</span>
				</Link>
				<Link to={'/field-register'} className='header-main-link'>
					<FormOutlined />
					Đăng ký sân
				</Link>
				<span className='header-main-link'>
					<Dropdown
						menu={{ items: user?.role === 'Guest' ?  guestMenu : userMenu}}
						placement='bottom'
						arrow
					>
						<span>
							<UserOutlined />
							<span>{user?.name || "Tài khoản"}</span>
							<DownOutlined />
						</span>
					</Dropdown>
				</span>
			</Flex>
		</Flex>
	)
}

export default HeaderComponent