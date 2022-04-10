import React from 'react';
import './SectionOne.scss';
import img8 from '../../assets/images/img8.png';
import { VscArrowRight } from 'react-icons/vsc';
import Grid from '../Grid/Grid';
import { filters, sectionOne } from '../../lib/mock/mock';
const SectionOne = () => {
    return (
        <section className="SectionOne">

            <div className="SectionOne-Filter">
                {filters.map((filter, index) => (
                    <p className="SectionOne-FilterItem" activeclassname="SectionOne-FilterItem_active" key={index}> {filter.title}</p>
                ))}
            </div >
            <div className='SectionOne-Content'>
                <figure className='SectionOne-Figure'>
                    <img src={img8} alt="Image 8" className='SectionOne-Image' />
                </figure>
                <Grid columns={2}>
                    {sectionOne.map((info, index) => (
                        <div className='SectionOne-Item' key={index}>
                            <h3 className='SectionOne-ItemTitle'>{info.title}</h3>
                            <p className='SectionOne-ItemDescription'>{info.description}</p>
                            <div className='SectionOne-Button'>
                                <p className='SectionOne-ButtonText'>{info.text}</p>
                                <VscArrowRight style={{ color: '#828282' }} />
                            </div>
                        </div>
                    ))}
                </Grid>
            </div>
        </section >
    );
}

export default SectionOne;