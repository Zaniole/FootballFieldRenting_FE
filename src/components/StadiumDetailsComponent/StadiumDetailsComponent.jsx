import React from 'react'
import { Row, Col } from 'antd';
import { Image } from 'antd';
import SanDaiTu from '../../assets/images/sanDaiTu.jpg'
import './style.css'

const StadiumDetailsComponent = () => {
    return (
        <div style={{margin: '16px 24px'}}>
            <Row gutter={[16,16]}>
                <Col span={8} className='image'>
                    <Image 
                        src={SanDaiTu}
                        preview={false}
                        height={"100%"}
                        
                    />
                </Col>
                <Col span={16} className='info'>
                    <h3>Thông tin sân:</h3>
                    <p>Địa chỉ:</p>
                    <p>Loại sân:</p>
                    <p>Giờ mở cửa:</p>
                    <p>Số sân thi đấu:</p>
                    <p>Giá sân:</p>
                    <div>
                        Dịch vụ tiện ích:
                        <div className='service'>
                            <p>Some services here</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16,16]}>
                <Col span={12} className='order'>Order</Col>
                <Col span={12} className='priceTable'>Price table</Col>
            </Row>
            <div>
                <Col span={24} className='description'>DESCRIPTION</Col>
            </div>
        </div>
    )
}

export default StadiumDetailsComponent