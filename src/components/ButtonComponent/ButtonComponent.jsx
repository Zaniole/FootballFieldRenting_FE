import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({type, text, size, styleButton, styleTextButton, ...rests}) => {
  return (
    <Button 
      type={type}
      size={size}
      style={styleButton}
      {...rests}
    >
      <span style={styleTextButton}>{text}</span>
    </Button>
  )
}

export default ButtonComponent