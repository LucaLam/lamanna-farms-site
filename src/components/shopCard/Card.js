import React from 'react'

import "./card.scss";

import garlic from '../../assets/garlic.jpg';

const Card =({product})=>{

    
    const {name, description, cost, img} = product

        return (
            <div className="card__container">
                <h3 className="heading-3">{name}</h3>
                <img className="card__img" src={garlic} alt="Product "  />
                <p className="card__description">{description}</p>
                <p className="card__price">${cost}</p>
            </div>)
            
            
}

export default Card;