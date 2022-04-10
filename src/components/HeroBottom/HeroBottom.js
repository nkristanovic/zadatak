import React from 'react';
import './HeroBottom.scss';
import Grid from '../Grid/Grid';
import { heroBottom } from '../../lib/mock/mock';
const HeroBottom = () => {

    return (
        <div className="HeroBottom">
            <Grid>
                {heroBottom.map((info, index) => (
                    <div className='HeroBottom-Wrapper' key={index}>
                        <figure className='HeroBottom-Figure'>
                            <img src={info.imgUrl} alt={info.altUrl} className="HeroBottom-Image" />
                        </figure>
                        <p className="HeroBottom-Description">{info.description}</p>
                    </div>
                ))}
            </Grid>
        </div>
    );
}

export default HeroBottom;