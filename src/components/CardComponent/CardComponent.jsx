import { Card } from 'antd'
import React from 'react'
import { StyleAddress, StyleNameStadium, StyleNumber, StylePrice } from './style'
import './style.css'
import { useNavigate } from 'react-router-dom'

const CardComponent = ({ stadiumData }) => {
    const navigate = useNavigate();
    const {
        _id,
        name,
        address,
        subField,
        service,
        image,
        price,
        goldPrice,
        openTime,
        description,
        rating
    } = stadiumData;

    const handleClickStadium = () => {
        navigate(`/stadium/${_id}`, { state: { stadium: stadiumData }});
    }
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Hình ảnh sân" src={image} />}
                onClick={handleClickStadium}
            >
                <StyleNameStadium>{name}</StyleNameStadium>
                <StyleAddress>Địa chỉ: {address}</StyleAddress>
                <StyleNumber>Số sân: {subField}</StyleNumber>
                <StylePrice>Giá thuê: {price} VNĐ</StylePrice>
            </Card>
        </div>

    )
}

export default CardComponent