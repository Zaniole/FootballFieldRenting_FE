import React from 'react';
import Slider from "react-slick";
import { Image } from 'antd';

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,

    };
    return (
        <Slider {...settings}>
            {arrImages.map((img, index) =>{
                return(
                    <Image 
                        src={img}
                        key={index} 
                        alt="image"
                        preview={false}
                        width='auto'
                        height='300px'
                    />
                )
            })}
        </Slider>
    )
}

export default SliderComponent