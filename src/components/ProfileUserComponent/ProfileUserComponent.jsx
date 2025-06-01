import React from 'react';
import { Card, Descriptions, Avatar } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';

const ProfileUserComponent = ({ user }) => {
	const {
		name,
		email,
		phone,
		role,
		id,
		isAdmin
	} = user;
	let roleDisplay = '';
	if (isAdmin) {
		roleDisplay = 'Quản trị viên'
	} else {
		roleDisplay = role === 'customer' ? 'Khách hàng' : 'Chủ sân'
	}

	return (
		<Card
			title="Thông tin người dùng"
			bordered={false}
			style={{ maxWidth: 600, margin: '0 auto', marginTop: 40, borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
		>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
				<Avatar size={64} icon={<UserOutlined />} style={{ marginRight: 16 }} />
				<div>
					<h2 style={{ marginBottom: 0 }}>{name}</h2>
					<p style={{ margin: 0, color: '#888' }}>{roleDisplay}</p>
				</div>
			</div>

			<Descriptions column={1} bordered size="middle">
				<Descriptions.Item label="Email">
					<MailOutlined style={{ marginRight: 8 }} />
					{email}
				</Descriptions.Item>
				<Descriptions.Item label="Số điện thoại">
					<PhoneOutlined style={{ marginRight: 8 }} />
					{phone}
				</Descriptions.Item>
				<Descriptions.Item label="Vai trò">
					{roleDisplay}
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
};

export default ProfileUserComponent;
