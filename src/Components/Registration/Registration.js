import React from 'react'
import './Registration.css'

import AuthService from '../../services/auth-service'
import Context from '../../Context';

class Registration extends React.Component {
    static contextType = Context;

    handleRegistration = e => {
        e.preventDefault();

        const user_name = e.target.user_name.value;
        const full_name = e.target.full_name.value;
        const password = e.target.password.value;
        const repeatPass = e.target.repeatPass.value;

        if(password !== repeatPass) {
            throw new Error('passwords must match.')
        }
        const target = e.target;
        
        AuthService.postUser({
            user_name,
            password,
            full_name
        })
        .then(user => {
            target.user_name.value = ''
            target.full_name.value = ''
            target.password.value = ''
            target.repeatPass.value = ''
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
                    <fieldset className="reg_field">
                        <legend className="reg_legend">New User Registration</legend>
                        <label className="reg_label" htmlFor="fullname">Full Name</label>
                        <input className="reg_form_input" type="text" name="full_name"/>
                        <label className="reg_label" htmlFor="username">Username</label>
                        <input className="reg_form_input" type="text" name="user_name" />
                        <label className="reg_label" htmlFor="password">Password</label>
                        <input className="reg_form_input" type="text" name="password" />
                        <label className="reg_label" htmlFor="repeatPass">Repeat Password</label>
                        <input className="reg_form_input" type="text" name="repeatPass" />
                        <button className="reg_submit" type="submit">Register</button>
                    </fieldset>
                </form>
            </div>

        )
    }
}

export default Registration