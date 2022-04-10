import React from 'react';
import './Comments.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { comments } from '../../lib/mock/mock';
import quotation from '../../assets/images/quotation.png';
import './slider.css';
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

const Comments = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="Comments">
            <figure className='Comments-FigureAbsolute'>
                <img src={quotation} alt="" className='Comments-ImageAbsolute' />
            </figure>
            <Slider {...settings}>
                {comments.map((info, index) => (
                    <div className='Comments-Wrapper' key={index}>
                        <figure className='Comments-Figure'>
                            <img src={info.imgUrl} alt={info.altUrl} className="Comments-Image" />
                        </figure>
                        <div className='Comments-Info'>
                            <p className="Comments-InfoDescription">{info.description}</p>
                            <p className='Comments-InfoName'>{info.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Comments;