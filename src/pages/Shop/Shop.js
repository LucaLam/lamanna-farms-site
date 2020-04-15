import React, { Component } from 'react'

import Card from '../../components/shopCard/Card';

import data from "../../data/shopData";

import "./shop.scss";

export default class Shop extends Component {

    state={
        data: data
    }

    render() {
        return (
            <div className="shop__section" id="shop">
                <h1 className="heading-1">Shop</h1>
                <div className="shop__product-container">
                {
                    data.map(product => <Card key={product.id} product={product}/> )
                } 
                </div>
            </div>
        )
    }
}
