import React from 'react'
import './Registration.css'

import AuthService from '../../services/auth-service'
import Context from '../../Context';

class Registration extends React.Component {
    static contextType = Context;

    handleRegistration = e => {
        e.preventDefault();

        const { user_name, full_name, password, repeatPass } = e.target

        if(password !== repeatPass) {
            throw new Error('passwords must match.')
        }

        AuthService.postUser({
            user_name,
            password,
            full_name
        })
        .then(user => {
            user_name.value = '',
            full_name.value = '',
            password.value = '',
            repeatPass.value = '',
            this.props.history.push('/login')
        })
        .catch(res => {
            console.log(res, 'create an error handler!')
        })
    }

    render() {
        return (
            <div className="reg_container">
                <form className="reg_form" action="submit" onSubmit={this.handleRegistration}>
                    <fieldset className="form_field">
                        <legend>New User Registration</legend>
                        <label htmlFor="fullname">Username:</label>
                        <input className="reg_form_input" type="text" name="full_name"/>
                        <label htmlFor="username">Username:</label>
                        <input className="reg_form_input" type="text" name="user_name" />
                        <label htmlFor="password">Password:</label>
                        <input className="reg_form_input" type="text" name="password" />
                        <label htmlFor="repeatPass">Repeat Pass:</label>
                        <input className="reg_form_input" type="text" name="repeatPass" />
                        <button className="reg_submit" type="submit">Register</button>
                    </fieldset>
                </form>
            </div>

        )
    }
}

export default Registration