import React from 'react';
import Slider from "react-slick";
import { Image } from 'antd';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: " rgb(37, 99, 235)", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: " rgb(37, 99, 235)", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: false,
        adaptiveHeight: true,
        fade: true
    };
    return (
        <Slider {...settings}>
            {arrImages.map((img, index) => {
                return (
                    <Image
                        src={img}
                        key={index}
                        alt="image"
                        preview={false}
                        width='100%'
                        height='600px'
                        // height='300px'
                    />
                )
            })}
        </Slider>
    )
}

export default SliderComponent