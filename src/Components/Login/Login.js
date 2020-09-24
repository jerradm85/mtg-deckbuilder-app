import React from 'react'
import './Login.css'
import AuthService from '../../services/auth-service'
import jwtService from '../../services/jwt-service'

import Context from '../../Context';

class Login extends React.Component {
    static contextType = Context;

    handleLogin = e => {
        e.preventDefault()

        const user_name = e.target.user_name.value;
        const password = e.target.password.value;
        const target = e.target
        AuthService.postLogin({
            user_name,
            password,
        })
            .then(res => {
                target.user_name.value = ''
                target.password.value = ''
                jwtService.saveToken(res.authToken)
                const { location, history } = this.props
                this.context.setUser(user_name)
                const destination = (location.state || {}).from || '/user'
                history.push(destination)
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
                        <legend className="login_legend">User Login</legend>
                        <label className="login_label" htmlFor="username">Username</label>
                        <input className="login_input" type="text" name="user_name" />
                        <label className="login_label" htmlFor="password">Password</label>
                        <input className="login_input" type="text" name="password" />
                        <button className="login_submit" type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;