import React from 'react'
import './Login.css'

import Context from '../../Context';

class Login extends React.Component {
    static contextType = Context;

    handleLogin = e => {

        const username = e.target.username.value
        const password = e.target.password.value

        this.context.setUser(username)

        this.props.history.push('/user')

        // fetch(`${'API path goes here'}/users`, {
        //     method: "GET", // should this be a get?
        // })
        //     .then()
    }

    render() {
        return (
            <div className="login_container">
                <form className="login_form" action="login" onSubmit={this.handleLogin}>
                    <fieldset className="login_field">
                        <legend>User Login</legend>
                        <label htmlFor="username">Username:</label>
                        <input className="login_form_input" type="text" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input className="login_form_input" type="text" name="password" />
                        <button className="login_button" type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;