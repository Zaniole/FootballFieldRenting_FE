import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputComponent from '../../components/InputComponent/InputComponent';
import { Divider } from 'antd';
import { WrapperSignUpContainer } from './style'

const SignUpPage = () => {
  return (
    <WrapperSignUpContainer style={{margin: '8px auto'}}>
      <h1 style={{ color: '#001433' }}>ĐĂNG KÝ</h1>
      <InputComponent style={{ border: '1px solid' }} 
        size={"middle"}
        placeholder={"Họ và tên"}
      >
      </InputComponent>
      <InputComponent style={{ border: '1px solid' }}
        size={"middle"}
        placeholder={"Số điện thoại"}
      >
      </InputComponent>
      <InputComponent style={{ border: '1px solid' }}
        size={"middle"}
        placeholder={"Email"}
      >
      </InputComponent>
      <InputComponent style={{ border: '1px solid' }}
        size={"middle"}
        placeholder={"Mật khẩu"}
      >
      </InputComponent>
      <InputComponent style={{ border: '1px solid' }}
        size={"middle"}
        placeholder={"Xác nhận mật khẩu"}
      >
      </InputComponent>
      <ButtonComponent
        type={'primary'}
        text={"Đăng ký"}
        size={"large"}
        styleButton={{ margin: '4px 0px 0px 0px', background: '#001433' }}
      >
      </ButtonComponent>
    </WrapperSignUpContainer>
  )
}

export default SignUpPage