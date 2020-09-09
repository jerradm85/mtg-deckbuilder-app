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
            <div>
                <form action="login" onSubmit={this.handleLogin}>
                    <fieldset className="loginForm">
                        <legend>User Login</legend>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" />
                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;