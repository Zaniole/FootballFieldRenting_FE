import React from 'react';
import { Layout, Row, Col, Typography, Button } from 'antd';
import background2 from '../../assets/images/background2.jpg';
import {CaretRightOutlined} from '@ant-design/icons'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroComponent = () => {
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu overlay (đen với độ trong suốt 50%)
        zIndex: 1,
    };

    return (
        <Layout style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            position: 'relative',
            padding: '100px 50px',
            textAlign: 'center'
        }}>
            <div style={overlayStyle}></div>
            <Content style={{ position: 'relative', zIndex: 2 }}>
                <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
                    <Col xs={24} md={12}>
                        <Title level={1} style={{ fontSize: '48px', color: '#FFD700', fontFamily: 'Arial', marginBottom: '24px' }}>
                            HỆ THỐNG SÂN BÓNG ĐÁ HÀ NỘI
                        </Title>
                        <Paragraph style={{ fontSize: '20px', color: '#fff', margin: '0 0 32px 64px', textAlign:'start' }}>
                            <p><CaretRightOutlined />&nbsp;&nbsp;&nbsp;Hơn 100 sân bóng trên 20 dịa điểm</p>
                            <p><CaretRightOutlined />&nbsp;&nbsp;&nbsp;Hệ thống sân chất lượng, cơ sở vật chất hiện đại </p>
                            <p><CaretRightOutlined />&nbsp;&nbsp;&nbsp;Đa dạng dịch vụ, tiện ích, mang lại trải nghiệm tốt nhất</p>
                        </Paragraph>
                        <Button 
                            type="primary" 
                            size="large" 
                            style={{ marginRight: '16px', borderRadius: '20px', backgroundColor: '#008CBA', border: 'none' }}
                        >
                            Khám phá ngay
                        </Button>
                        <Button size="large">Liên hệ</Button>
                    </Col>
                    <Col xs={24} md={12}>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HeroComponent;
