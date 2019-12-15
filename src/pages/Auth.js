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

         const requestBody = {
             query: `
              mutation {
                  createUser(UserInput: {email: "${email}", password: "${password}"}) {
                      _id
                      email
                  }
              }
             `
         };

/// GraphQl API is not currently connected and needs troubleshooting

         fetch('http://locahost:8000/graphql', {
             method: 'POST',
             body: JSON.stringify(requestBody),
             headers: {
                'Content-Type': 'application/json'
             }
         })
        .then(res => {
             if (res.status !== 200 && res.status !== 201) {
                 throw new Error('Failed!');
             }
             return res.json();
         })
         .then(resData => {
             console.log(resData);
         })
         .catch(err => {
             console.log(err);
         })
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