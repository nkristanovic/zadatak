import React from 'react';
import './SectionTwo.scss';
import Grid from '../Grid/Grid';
import { sectioTwo } from '../../lib/mock/mock';

const SectionTwo = () => {

    return (
        <div className="SectionTwo">
            <h2 className='SectionTwo-Title'>LOREM IPSUM</h2>
            <Grid>
                {sectioTwo.map((info, index) => (
                    <div className='SectionTwo-Item' key={index}>
                        <figure className='SectionTwo-Figure'>
                            <img src={info.imgUrl} alt={info.imgAlt} className="SectionTwo-Image" />
                        </figure>
                        <h3 className="SectionTwo-ItemTitle">{info.title}</h3>
                        <p className="SectionTwo-ItemDescription">{info.description}</p>
                    </div>
                ))}
            </Grid>
        </div>
    );
}

export default SectionTwo;