import React from 'react'
import './Login.css'
import AuthService from '../../services/auth-service'
import jwtService from '../../services/jwt-service'

import Context from '../../Context';

class Login extends React.Component {
    static contextType = Context;

    handleLogin = e => {
        e.preventDefault()

        const { user_name, password } = e.target

        AuthService.loginServer({
            user_name,
            password
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            jwtService.saveToken(res.authToken)
            this.props.history.push('/user')
        })
        .catch(res => {
            console.log(res, 'create an error handler!')
        })

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