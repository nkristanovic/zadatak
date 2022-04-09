import React from 'react';
import './SectionOne.scss';
import img8 from '../../assets/images/img8.png';
import { VscArrowRight } from 'react-icons/vsc';
import Grid from '../Grid/Grid';
const SectionOne = () => {
    return (
        <section className="SectionOne">
            <div className="SectionOne-Filter">
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Filter by type</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Someone</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Somewhere</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Sometime</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Someplace</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">In summertime</p>
                <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active">Wherever</p>
            </div>
            <div className='SectionOne-Content'>
                <figure className='SectionOne-Figure'>
                    <img src={img8} alt="Image 8" className='SectionOne-Image' />
                </figure>
                <Grid columns={2}>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Someone</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>In summertime</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Somwhere</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Someone</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>We need to be together</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Someone</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Someone</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                    <div className='SectionOne-Item'>
                        <h3 className='SectionOne-ItemTitle'>Someone</h3>
                        <p className='SectionOne-ItemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sed integer molestie vel tristique lectus dignissim dolor quam.</p>
                        <div className='SectionOne-Button'>
                            <p className='SectionOne-ButtonText'>Read more</p>
                            <VscArrowRight style={{ color: '#828282' }} />
                        </div>
                    </div>
                </Grid>
            </div>
        </section>
    );
}

export default SectionOne;