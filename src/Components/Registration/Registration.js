import React from 'react'
import './Registration.css'

import AuthService from '../../services/auth-service'
import Context from '../../Context';

class Registration extends React.Component {
    static contextType = Context;

    state = { error: null }

    handleRegistration = e => {
        e.preventDefault();

        const user_name = e.target.user_name.value;
        const full_name = e.target.full_name.value;
        const password = e.target.password.value;
        const repeatPass = e.target.repeatPass.value;
        const target = e.target;

        if (!user_name || user_name.trim() === "") {
            this.setState({
                error: 'Please enter a username.'
            })
            return
        }

        if (password !== repeatPass) {
            this.setState({
                error: 'Passwords must match.'
            })
            return
        }

        AuthService.postUser({
            user_name,
            password,
            full_name
        })
            .then(user => {
                if (user.error) {
                    this.setState({
                        error: user.error
                    })
                    return
                }
                target.user_name.value = ''
                target.full_name.value = ''
                target.password.value = ''
                target.repeatPass.value = ''
                this.props.history.push('/login')
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <div className="reg_container">
                <form className="reg_form" action="submit" onSubmit={this.handleRegistration}>
                    <fieldset className="reg_field">
                        <legend className="reg_legend">Registration</legend>
                        <label className="reg_label" htmlFor="fullname">Full Name</label>
                        <input className="reg_form_input" type="text" name="full_name" required />
                        <label className="reg_label" htmlFor="username">Username</label>
                        <input className="reg_form_input" type="text" name="user_name" required />
                        <label className="reg_label" htmlFor="password">Password</label>
                        <input className="reg_form_input" type="password" name="password" required />
                        <label className="reg_label" htmlFor="repeatPass">Repeat Password</label>
                        <input className="reg_form_input" type="password" name="repeatPass" required />
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <button className="reg_submit glow-button" type="submit">Register</button>
                    </fieldset>
                </form>
            </div>

        )
    }
}

export default Registration