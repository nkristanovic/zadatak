import React from 'react';
import Hero from '../../components/Hero/Hero';
import HeroBottom from '../../components/HeroBottom/HeroBottom';
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import Comments from '../../components/Comments/Comments';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroBottom />
            <SectionOne />
            <SectionTwo />
            <Comments />
        </div>
    );
}

export default Home;