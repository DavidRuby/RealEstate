import React, { Component } from 'react';

class AuthPage extends Component {
    render () {
        return <form>
            <div className="form-control">
                <label htmlfor="email">E-mail</label>
                <input type="email" id="email" />
            </div>
            <div className="form-control">
            <label htmlfor="password">Password</label>
            <input type="password" id="password" />
            </div>
            <div classname="form-actions">
            <button type="button">Switch to Signup</button>
            <button type="submit">Submit</button>
            </div>

        </form>;
    }
}

export default AuthPage;