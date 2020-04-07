import React, { Component } from 'react'

import './form.scss';

export default class Form extends Component {
    render() {
        return (
            <div className="contact-section">
                <h1 className='heading-1'>Place an order</h1>
                <p>Please use the form below to place an order. Please allow 24 - 48 hours for any prepared foods. Orders will be filled once an E-transfer is sent.</p>
                <form>
                    <input></input>
                    <label>Name</label>
                    <input></input>
                    <label>E-mail</label>
                    <textarea>Please tell us your order here.</textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
