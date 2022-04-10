import React from 'react';
import './Hero.scss';
import triangles from '../../assets/images/triangles.png';
import img1 from '../../assets/images/img1.png';
import img3 from '../../assets/images/img3.png';
import './carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: 'calc(10% - 25px)', display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: 'calc(10% - 25px)', display: "block", background: "green", zIndex: 1 }}
            onClick={onClick}
        />
    );
}
const Hero = () => {
    const settings = {
        dots: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
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
                        <div className='Hero-Figure'>
                            <img src={img1} alt='image 1' className='Hero-Image' style={{ width: 714 }} />
                        </div>
                        <div className='Hero-Figure'>
                            <img src={img1} alt='image 2' className='Hero-Image' style={{ width: 836 }} />
                        </div>
                        <div className='Hero-Figure'>
                            <img src={img3} alt='image 3' className='Hero-Image' style={{ width: 836 }} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;