import React from 'react'
import { Col, Image, Flex } from 'antd'
import logo from '../../assets/images/logo.png';
import {ReactComponent as FootballFieldIcon} from '../../assets/images/football-field.svg'; 
import './style.css'
import { FormOutlined, UserOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <Flex className='header' justify='space-between' align='center'>
      <div className='header-logo'>
        <Image
          src={logo}
          preview={false}
        />
      </div>
      <Flex justify='space-around' align='center' className='header-main' gap='64px'>
        <span>
          <FootballFieldIcon className='icon'/>
          Danh sách sân bóng
        </span>
        <span>
          <FormOutlined />
          Đăng ký sân
        </span>
        <span>
          <UserOutlined />
          Tài khoản
        </span>
      </Flex>
    </Flex>
  )
}

export default HeaderComponent