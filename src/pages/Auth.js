import React, { Component } from 'react';
import './Auth.css'

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if(email.trim().length === 0 || password.trim().length === 0){
           return;         
         }

         console.log(email, password);
         // ...
    };

    render () {
        return (
        <form className="auth-form" onSubmit={this.submitHandler}>
            <div className="form-control">
                <label htmlfor="email">E-mail</label>
                <input type="email" id="email" ref={this.emailEl} />
            </div>
            <div className="form-control">
            <label htmlfor="password">Password</label>
            <input type="password" id="password" ref={this.passwordEl} />
            </div>
            <div classname="form-actions">
            <button type="submit">Submit</button>
            <button type="button">Switch to Signup</button>
            </div>
        </form>
        );
    }
}

export default AuthPage;