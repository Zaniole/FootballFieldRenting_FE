import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import background1 from '../../assets/images/background1.jpg'
import background2 from '../../assets/images/background2.jpg'
import background3 from '../../assets/images/background3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Flex } from 'antd';
import './style.css'

const HomePage = () => {
  return (
    <div>
      <HeroComponent/>
      <div style={{ padding: '0 4px' }}>
        <h2>Danh sách sân</h2>
        <div>
          <Flex
            wrap
            gap="large"
            justify='space-around'
          >
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
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default HomePage