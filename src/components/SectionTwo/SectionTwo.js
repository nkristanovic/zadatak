import React from 'react';
import './SectionTwo.scss';
import img9 from '../../assets/images/img9.png';
import Grid from '../Grid/Grid';
const SectionTwo = () => {

    return (
        <div className="SectionTwo">
            <h2 className='SectionTwo-Title'>LOREM IPSUM</h2>
            <Grid>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='SectionTwo-Item'>
                    <figure className='SectionTwo-Figure'>
                        <img src={img9} alt="image6" className="SectionTwo-Image" />
                    </figure>
                    <h3 className="SectionTwo-ItemTitle">Someone</h3>
                    <p className="SectionTwo-ItemDescription">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </Grid>
        </div>
    );
}

export default SectionTwo;