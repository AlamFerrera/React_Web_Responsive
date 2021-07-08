import React from 'react';
import CardItem from './cardItem';
import './card.css';

function Card(){
    return(
        <div className="cards">
            <h1>Mira estos destinos epicos</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="/imgs/img-9.jpg"
                                  text="Explora la catarata escondida en las profundidades de la selva Amazonica"
                                  label="Aventura"
                                  path="/servicios"/>
                        <CardItem src="/imgs/img-2.jpg"
                                  text="Viaja a traves de la isla Bali en un crucero privado"
                                  label="Lujoso"
                                  path="/servicios"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="/imgs/img-4.jpg"
                                  text="Experimenta el Football en la cima de las montañas Himalayan"
                                  label="Aventura"
                                  path="/servicios"/>
                        <CardItem src="/imgs/img-8.jpg"
                                  text="Viaja a través del desierto de sahara en un tour a camello"
                                  label="Aventura"
                                  path="/servicios"/>
                        <CardItem src="/imgs/img-3.jpg"
                                  text="Zarpa al Oceano Atlantico visitando aguas inexploradas"
                                  label="Misterio"
                                  path="/servicios"/>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card;