import React from 'react';
import './Hero.scss';
import triangles from '../../assets/images/triangles.png';
import './carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { infinity } from '../../lib/mock/mock';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: 'calc(10% - 25px)', display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: 'calc(10% - 25px)', display: "block", zIndex: 1 }}
            onClick={onClick}
        />
    );
}
const Hero = () => {
    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="Hero">
            <div className='Hero-Header'>
                <p className='Hero-HeaderLogo'>LOGO</p>
                <img className='Hero-HeaderImage' src={triangles} alt="triangles" />
            </div>
            <div>
                <div className='Hero-CarouselWrapper'>
                    <Slider {...settings}>
                        {infinity.map((info, index) => (
                            <div className='Hero-Figure' key={index}>
                                <img src={info.imgUrl} alt={info.altUrl} className='Hero-Image' />
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;