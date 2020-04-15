import React, { Component } from 'react'

import './form.scss';

export default class Form extends Component {
    state = {
        message: '',
        email: '',
        name: '',
        formSubmitted: false,
        formEmailSent: false
    }

    //changes state to store name value
    handleName = (event) =>{
        this.setState({
            name: event.target.value
        });
    }

    //changes state to store email value
    handleChange = (event) =>{
        this.setState({
            email: event.target.value
        });
    }

    //changes state to store order message
    handleOrder = (event) =>{
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template,
            REACT_APP_EMAILJS_USERID: user
        } = process.env

        const {email, message, name} = this.state

        this.sendOrder(
            template,
            email,
            receiverEmail,
            message,
            name,
            user
        )

        this.setState({
            formSubmitted: true
        })
        }

        sendOrder(templateID, email, message, name, user){
            console.log("User", user)
            window.emailjs.send('default_service', templateID, {
                name,
                email,
                message
            },
            user)
            .then(res => {
                console.log(res);
                this.setState({
                    formEmailSent: true
                });
            })
            .catch(err => console.error("Failed to send order."))
        }

    render() {

        return (
            <div className="contact-section" id="contact">
                <h1 className='heading-1'>Place an order</h1>
                <p className="disclaimer">Please use the form below to place an order. Please allow 24 - 48 hours for any prepared foods. <br/>Orders will be filled once an E-transfer is sent.</p>
                <div className='test'>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleName}
                    ></input>
                    <label className="form__label">Name</label>

                    <input className="form__input" 
                    placeholder="E-mail"
                    type='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    ></input>
                    <label className="form__label">E-mail</label>

                    <textarea 
                    className="form__txt" 
                    placeholder="Please tell us your order here."
                    required
                    onChange={this.handleOrder}
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
