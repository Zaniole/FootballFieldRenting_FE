import React from 'react';
import Slider from "react-slick";
import { Image } from 'antd';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: " #E77715", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: " #E77715", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const SliderComponent = ({ arrImages, imageStyle, onImageClick }) => {
    const settings = {
        dots: false,
        speed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <Slider {...settings}>
            {arrImages.map((img, index) => {
                return (
                    <div key={index} style={{ padding: '0 8px'}}>
                        <Image
                            onClick={() => onImageClick(img)}
                            src={img}
                            alt={`image-${index}`}
                            preview={false}
                            style={{ ...imageStyle }}
                        />
                    </div>
                )
            })}
        </Slider>
    )
}

export default SliderComponent