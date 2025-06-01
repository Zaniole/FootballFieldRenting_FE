import React from "react";
import { Row, Col, Image, Button } from "antd";
import { useState } from "react";
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
import locationIcon from "../../assets/images/location.png";
import Japan from "../../assets/images/javfootball.webp";
import Messi from "../../assets/images/messi.avif";
import SliderComponent from "../SliderComponent/SliderComponent";

const StadiumDetailsComponent = () => {
	const fieldName = "Sân bóng đá Đại Từ";
	const address = "Hoàng Mai, Hà Nội";
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

	return (
		<div style={{ margin: "16px 20px" }}>
			<Row>
				<div>
					<h1>{fieldName}</h1>
					<h2>
						<img
							src={locationIcon}
							style={{ height: "24px", margin: "0 8px 0 0" }}
						/>
						{address}
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
					<h2>Thông tin sân</h2>
					<p>Loại sân: Sân 7</p>
					<p>Giờ mở cửa:</p>
					<p>Số sân thi đấu:</p>
					<p>Giá sân:</p>
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
						</div>
					</div>
					
					
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={8} className="quick-order">
					<Button color="danger" variant="solid">Đặt sân nhanh</Button>
				</Col>
				<Col span={16} className="order">
				<Button color="danger" variant="solid">Đặt sân</Button>
				</Col>
			</Row>
			<div>
				<h3>Sân bóng đá The One Gamuda</h3>
				<p>Số Lượng sân : 04 sân 11 người </p>
				<p>Kích Thước sân : Dài (45m) Ngang (30m) </p>
				<p>Tổng diện tích : 1350m2 </p>
				<p> Tình trạng kinh doanh : Tốt</p>
				<p>Loại cỏ sử dụng: Cỏ nhân tạo sân bóng VFC381380S3 </p>
			</div>
		</div>
	);
};

export default StadiumDetailsComponent;
