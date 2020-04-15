import React, { Component } from 'react'
import './form.scss';

import emailjs from 'emailjs-com';

export default class Form extends Component {
    state = {
        message: '',
        email: '',
        name: '',
        formSubmitted: false,
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        emailjs.sendForm('default_service', 'process_order', '#form', 'user_HKfUM3NaK6LRFVxMXq3S5')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

    this.setState({
        formSubmitted: true
    })
}


    render() {
        console.log(this.state);
        return (
            <div className="contact-section" id="contact">
                <h1 className='heading-1'>Place an order</h1>
                <p className="disclaimer">Please use the form below to place an order. Please allow 24 - 48 hours for any prepared foods. <br/>Orders will be filled once an E-transfer is sent.</p>
                <div className='test'>
                <form className="form" onSubmit={this.handleSubmit} id="form">
                    <input className="form__input" 
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    ></input>
                    <label className="form__label">Name</label>

                    <input className="form__input" 
                    placeholder="E-mail"
                    type='email'
                    name='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    ></input>
                    <label className="form__label">E-mail</label>

                    <textarea 
                    className="form__txt" 
                    placeholder="Please tell us your order here."
                    required
                    name='message'
                    onChange={this.handleChange}
                    value={this.state.message}
                    ></textarea>

                    <button className="form__btn"
                    type='submit'
                    value='submit'
                    >Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
