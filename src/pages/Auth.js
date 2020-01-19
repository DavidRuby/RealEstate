import React, { Component } from 'react';
import './Auth.css'



class AuthPage extends Component {
   
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