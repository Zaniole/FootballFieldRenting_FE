import React from 'react'
import { WrapperHeader, WrapperTextHeader } from './style'
import { Col } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <WrapperHeader>
      <Col span={5}>
        <WrapperTextHeader>
          <HomeOutlined />
          Trang Chủ
        </WrapperTextHeader>
      </Col>
      <Col span={5}>
        <WrapperTextHeader>
          Danh sách sân bóng
        </WrapperTextHeader>
      </Col>
      <Col span={5}>
        <WrapperTextHeader>
          Đăng ký cho thuê sân
        </WrapperTextHeader>
      </Col>
      <Col span={5}>
        <WrapperTextHeader>
          Đăng nhập/Đăng ký
        </WrapperTextHeader>
      </Col>
      <Col span={4}>
        <WrapperTextHeader>
          Giỏ hàng
        </WrapperTextHeader>
      </Col>
    </WrapperHeader>
  )
}

export default HeaderComponent