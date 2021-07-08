import React, {Fragment} from 'react';
import '../../App.css';
import HeroSection from '../Hero/hero';
import Cards from '../Cards/card';

function Home(){
    return(
        <Fragment>
            <HeroSection></HeroSection>
            <Cards/>
        </Fragment>
    );
}

export default Home;