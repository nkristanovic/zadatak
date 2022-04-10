import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './ScrollToTop.scss';
const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showTopBtn && (
                <div className="ScrollToTop-Wrapper" onClick={goToTop} >
                    <FaAngleUp style={{ color: '#00AACC' }} />
                </div>
            )}
        </>
    );
}

export default ScrollToTop;