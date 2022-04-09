import React from 'react';
import './HeroBottom.scss';
import img6 from '../../assets/images/img6.png';
import Grid from '../Grid/Grid';
const HeroBottom = () => {

    return (
        <div className="HeroBottom">
            <Grid>
                <div className='HeroBottom-Wrapper'>
                    <figure className='HeroBottom-Figure'>
                        <img src={img6} alt="image6" className="HeroBottom-Image" />
                    </figure>
                    <p className="HeroBottom-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='HeroBottom-Wrapper'>
                    <figure className='HeroBottom-Figure'>
                        <img src={img6} alt="image6" className="HeroBottom-Image" />
                    </figure>
                    <p className="HeroBottom-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='HeroBottom-Wrapper'>
                    <figure className='HeroBottom-Figure'>
                        <img src={img6} alt="image6" className="HeroBottom-Image" />
                    </figure>
                    <p className="HeroBottom-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </Grid>
        </div>
    );
}

export default HeroBottom;