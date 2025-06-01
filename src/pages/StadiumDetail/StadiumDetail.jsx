import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Divider, Flex, Image, message, Row, Typography } from 'antd';
import { EnvironmentTwoTone, HeartOutlined } from '@ant-design/icons'
import locationIcon from "../../assets/images/location.png";
import "./style.css";
import SanDaiTu from "../../assets/images/sanDaiTu.jpg";
import SanDamHong from "../../assets/images/sanDamHong1.jpg";
import SanDamHong2 from "../../assets/images/sanDamHong2.jpg";
import ballIcon from "../../assets/images/ball.svg";
import shoesIcon from "../../assets/images/shoes.png";
import wcIcon from "../../assets/images/wc.png";
import carParkingIcon from "../../assets/images/car-parking.png";
import motorcycleParkingIcon from "../../assets/images/motorcycle-parking.png";
import wifiIcon from "../../assets/images/wifi.png";
import foodAndDrinkIcon from "../../assets/images/food-and-drink.png";
import Japan from "../../assets/images/javfootball.webp";
import Messi from "../../assets/images/messi.avif";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { useSelector } from 'react-redux';
const { Title, Paragraph } = Typography;

const StadiumDetail = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const stadium = location.state?.stadium;
	const user = useSelector((state) => state.user)
	console.log(user);

	const services = [
		{ name: "ball", text: "Cho thuê bóng", icon: ballIcon },
		{ name: "shoes", text: "Cho thuê giày", icon: shoesIcon },
		{ name: "wc", text: "Nhà vệ sinh", icon: wcIcon },
		{ name: "carParking", text: "Bãi đỗ xe ô tô", icon: carParkingIcon },
		{
			name: "motorcycleParking",
			text: "Bãi đỗ xe máy",
			icon: motorcycleParkingIcon,
		},
		{ name: "wifi", text: "Wifi", icon: wifiIcon },
		{ name: "foodAndDrink", text: "Đồ ăn, nước uống", icon: foodAndDrinkIcon },
	];
	const images = [SanDaiTu, SanDamHong, Messi, Japan, SanDamHong2];

	const [mainImage, setMainImage] = useState(images[0]);

	const handleImageClick = (image) => {
		setMainImage(image);
	};

	const handleClickBooking = () => {
		if (user?.accessToken === '') {
			navigate('/login')
			message.info('Bạn cần đăng nhập để đặt sân')
		} else {
			navigate('/booking', { state: { stadium } });
		}
	}

	return (
		<div style={{ margin: "16px 0px" }}>
			<Row style={{ padding: "0px 32px" }}>
				<div>
					<h1 style={{ color: '#E77715' }}>{stadium.name}</h1>
					<h2>
						<EnvironmentTwoTone style={{ marginRight: '8px' }} />
						{stadium.address}
					</h2>
				</div>
			</Row>
			<Row className="info" justify="center" align="top">
				<Col span={12} style={{ textAlign: "center" }}>
					<div className="main-image" style={{ marginBottom: "20px" }}>
						<Image
							src={mainImage}
							preview={false}
							style={{
								maxWidth: "100%",
								maxHeight: "400px",
								objectFit: "cover",
							}}
						/>
					</div>
					<div
						className="thumbnail-list"
						style={{ width: "80%", margin: "0 auto" }}
					>
						<SliderComponent
							arrImages={images}
							imageStyle={{
								height: "100px",
								objectFit: "cover",
								cursor: "pointer",
								border: "1px solid #E77715",
							}}
							onImageClick={handleImageClick}
							style={{ width: "80%" }}
						/>
					</div>
				</Col>
				<Col span={12} className="info-details">
					<h2 style={{ color: '#E77715' }}>Thông tin sân</h2>
					<p>Loại sân: Sân 7</p>
					<p>Giờ mở cửa: {stadium.openTime.startAt} - {stadium.openTime.closeAt}</p>
					<p>Số sân thi đấu: {stadium.subField}</p>
					<p>Giá sân: {stadium.price} Việt Nam đồng</p>
					<p>Giá sân giờ đẹp: {stadium.goldPrice} Việt Nam đồng</p>
					<Divider></Divider>
					<div className="service">
						<p className="service-title">Dịch vụ</p>
						<div className="service-items">
							{services.map((service) => {
								return (
									<span key={service.name}>
										<img src={service.icon} className="service-icon" />
										{service.text}
									</span>
								);
							})}
							{/* {stadium.service.map((service, index) => {
								return (
									<span key={index}>
										<img src={service.icon} alt='icon' className="service-icon" />
										{service.text}
									</span>
								);
							})} */}
						</div>
					</div>
					<Divider></Divider>
					<Flex justify="center" gap='small' style={{ marginTop: '20px' }}>
						<Button
							size='large'
							style={{
								backgroundColor: '#E77715',
								color: 'white',
								width: '240px',
							}}
							onClick={handleClickBooking}
						>
							Đặt sân
						</Button>
						<Button
							color='primary'
							variant='dashed'
							size='large'
						>
							<HeartOutlined />
							Thêm vào danh sách yêu thích
						</Button>
					</Flex>
				</Col>
			</Row>
			<Row gutter={[16, 16]} style={{ margin: '16px' }}>
				<Col span={24}>
					<div
						style={{
							backgroundColor: '#FFF7E6', // nền nhẹ màu cam
							padding: '24px',
							borderRadius: '12px',
							textAlign: 'center',
							border: '1px solid #FFD591'
						}}
					>
						<h3 style={{ marginBottom: '16px', color: '#E77715' }}>
							Đặt sân mà không cần đăng nhập?
						</h3>
						<Button
							type="primary"
							size="large"
							style={{
								backgroundColor: '#E77715',
								borderColor: '#E77715',
								color: 'white',
								padding: '0 32px'
							}}
							onClick={() => {
								navigate('/quick-booking');
							}}
						>
							Đặt sân nhanh
						</Button>
					</div>
				</Col>
			</Row>
			<div style={{ margin: '16px 0px', padding: '32px', backgroundColor: '#fff' }}>
				<Title level={2}>Mô tả sân</Title>
				<Paragraph>
					{stadium.description}
				</Paragraph>
			</div>
		</div>
	)
}

export default StadiumDetail