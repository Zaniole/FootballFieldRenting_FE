import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import sanDaiTu from '../../assets/images/sanDaiTu.jpg'
import sanDamHong1 from '../../assets/images/sanDamHong1.jpg'
import sanDamHong2 from '../../assets/images/sanDamHong2.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Flex } from 'antd';
import { Col, Row } from 'antd';

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col span={1} style={{ backgroundColor: '#a5acaf' }}></Col>
        <Col span={22}>
          <div>
            <h1>Hệ thống sân bóng đá Hà Nội</h1>
          </div>
          <div style={{ backgroundColor: '#4dff00', padding: '0 32px' }}>
            <SliderComponent arrImages={[sanDaiTu, sanDamHong1, sanDamHong2]} />
          </div>
          <div style={{ padding: '0 4px' }}>
            <h2>Danh sách sân bóng</h2>
            <div>
              <Flex wrap gap="small" justify='space-around'>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
                <CardComponent></CardComponent>
              </Flex>
            </div>
          </div>
        </Col>
        <Col span={1} style={{ backgroundColor: '#a5acaf' }}></Col>
      </Row>
    </div>
  )
}

export default HomePage