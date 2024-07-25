import { Card } from 'antd'
import React from 'react'
import { StyleAddress, StyleNameStadium, StyleNumber, StylePrice } from './style'
import sanDaiTu from '../../assets/images/sanDaiTu.jpg'
import './style.css'

const CardComponent = () => {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={sanDaiTu} />}
            >
                <StyleNameStadium>Sân bóng Đại Từ</StyleNameStadium>
                <StyleAddress>Khu vực: Hoàng Mai</StyleAddress>
                <StyleNumber>Số sân: 4</StyleNumber>
                <StylePrice>Giá thuê: 500.000/1.5h</StylePrice>
            </Card>
        </div>

    )
}

export default CardComponent