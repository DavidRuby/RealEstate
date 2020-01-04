import React, { Component } from 'react';
import './Auth.css'
import AuthContext from '../context/auth-context';


class AuthPage extends Component {
    state = {
        isLogin: true
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return {isLogin: !prevState.isLogin};
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if(email.trim().length === 0 || password.trim().length === 0){
           return;         
         }

        /// GraphQL request to the back end
        
         let requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        };

        if (!this.state.isLogin) {

             requestBody = {
                query: `
                 mutation {
                     createUser(userInput: {email: "${email}", password: "${password}"}) {
                         _id
                         email
                     }
                 }
                `
            };
   
        }

   
/// GraphQl API is not currently connected and needs troubleshooting!

         fetch('http://localhost:8000/graphql', {
             method: 'POST',
             mode:'cors',
             body: JSON.stringify(requestBody),
             headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             })
         })
        .then(res => {
             if (res.status !== 200 && res.status !== 201) {
                 throw new Error('Failed!');
             }
             return res.json();
         })
         .then(resData => {
           if (resData.data.login) {
            this.context.login(
                resData.data.login.token, 
                resData.data.login.userId, 
                resData.data.login.tokenExpiration
            );
           }
         })
         .catch(err => {
             console.log(err);
         });
    };

    /// End of GraphQL request

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
            <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.switchModeHandler}>
             Switch to {this.state.isLogin ? 'Signup': 'Login'}
            </button>
            </div>
        </form>
        );
    }
}

export default AuthPage;