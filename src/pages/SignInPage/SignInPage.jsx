import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent';
import { WrapperLogInContainer } from './style';

const SignInPage = () => {
  return (
    <WrapperLogInContainer style={{margin: '8px auto'}}>
      <h1 style={{color:'#001433'}}>ĐĂNG NHẬP</h1>
      <InputComponent 
        size={"middle"}
        placeholder={"Email hoặc số điện thoại"}
      >
      </InputComponent>
      <InputComponent
        size={"middle"}
        placeholder={"Mật khẩu"}
        visible={"true"}
      >
      </InputComponent>
      <ButtonComponent
        type={'primary'}
        text={"Đăng nhập"}
        size={"large"}
        styleButton={{ margin: '4px 0px 0px 0px', background: '#001433' }}
        >
      </ButtonComponent>
      <Divider style={{color:'#001433'}}>Hoặc</Divider>
      <ButtonComponent
        type={'primary'}
        text={"Đăng nhập bằng Google"}
        size={"large"}
        icon={<GoogleOutlined />}
        styleButton={{ margin: '0px 0px 4px 0px', background: '#001433' }}
      >
      </ButtonComponent>
      <div>
        <p>Quên mật khẩu?</p>
      </div>
    </WrapperLogInContainer>
  )
}

export default SignInPage