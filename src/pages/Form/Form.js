import React, { Component } from 'react'

import './form.scss';

export default class Form extends Component {
    render() {
        return (
            <div className="contact-section">
                <h1 className='heading-1'>Place an order</h1>
                <p className="disclaimer">Please use the form below to place an order. Please allow 24 - 48 hours for any prepared foods. <br/>Orders will be filled once an E-transfer is sent.</p>
                <div className='test'>
                <form className="form">
                    <input className="form__input" placeholder="Name"></input>
                    <label className="form__label">Name</label>
                    <input className="form__input" placeholder="E-mail"></input>
                    <label className="form__label">E-mail</label>
                    <textarea className="form__txt" placeholder="Please tell us your order here."></textarea>
                    <button className="form__btn">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
