import React from 'react'
import Button from '../Button/button';

function HeroSection(){
    return(
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted />
            <h1>La Aventura Espera</h1>
            <p>Que estas esperando?</p>
            <div className="hero-btns">
                <Button className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large">GET STARTED</Button>

            </div>

        </div>
    );
}

export default HeroSection;