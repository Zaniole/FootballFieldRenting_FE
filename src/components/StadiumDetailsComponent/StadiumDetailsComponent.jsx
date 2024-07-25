import React from 'react'
import { Row, Col } from 'antd';
import { Image } from 'antd';
import SanDaiTu from '../../assets/images/sanDaiTu.jpg'

const StadiumDetailsComponent = () => {
    return (
        <div>StadiumDetailsComponent
            <Row>
                <Col span={12}>
                    <Image 
                        src={SanDaiTu}
                        preview={false}
                        height={"400px"}
                        
                    />
                </Col>
                <Col span={12}>
                    <h3>Thông tin sân:</h3>
                    <p>Địa chỉ:</p>
                    <p>Loại sân:</p>
                    <p>Giờ mở cửa:</p>
                    <p>Số sân thi đấu:</p>
                    <p>Giá sân:</p>
                    <div>
                        Dịch vụ tiện ích:
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>Order</Col>
                <Col span={12}>BOOK CALENDAR</Col>
            </Row>
        </div>
    )
}

export default StadiumDetailsComponent