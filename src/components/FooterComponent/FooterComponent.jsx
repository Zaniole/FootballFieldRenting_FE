import { Flex, Image } from 'antd'
import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'

const FooterComponent = () => {
    return (
        <div className='footer'>
            <Flex justify='space-around' align='flex-start'>
                <div className='footer-div'>
                    <Image src={logo} preview={false} className='footer-logo' />
                    <p>
                        Football Field Renting là website cung cấp dịch vụ thuê và cho thuê sân bóng đá lớn nhất Hà Nội
                    </p>
                </div>
                <div className='footer-div'>
                    <h4>Liên kết nhanh</h4>
                    <a href="">
                        <p>Trang chủ</p>
                    </a>
                    <a href="">
                        <p>Giới thiệu</p>
                    </a>
                    <a href="">
                        <p>Danh sách sân</p>
                    </a>
                </div>
                <div className='footer-div'>
                    <h4>Về chúng tôi</h4>
                    <a href="">
                        <p>Chính sách</p>
                    </a>
                    <a href="">
                        <p>Giới thiệu</p>
                    </a>
                    <a href="">
                        <p>Quy trình</p>
                    </a>
                </div>
                <div className='footer-div'>
                    <h4>Liên hệ</h4>
                    <p>Email: <span style={{color: "#E77715"}}>vilohung2002@gmail.com</span></p>
                    <p>Phone: <span style={{color: "#E77715"}}>0999002888</span></p>

                </div>
            </Flex>
            <p className='footer-copyright'>© Bản quyền thuộc về VLH Group</p>
        </div>
    )
}

export default FooterComponent