import React, {Fragment} from 'react';
import '../../App.css';
import HeroSection from '../Hero/hero';
import Cards from '../Cards/card';
import Footer from '../../componentes/Footer/footer';

function Home(){
    return(
        <Fragment>
            <HeroSection></HeroSection>
            <Cards/>
            <Footer/>
        </Fragment>
    );
}

export default Home;