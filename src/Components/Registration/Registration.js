import React from 'react'
import './Registration.css'

import Context from '../../Context';

class Registration extends React.Component {
    static contextType = Context;

    handleSubmit = e => {
        e.preventDefault();

        // const users = this.context.users
        // console.log(users)

        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const remail = e.target.remail.value;

        // if(email !== remail) {
        //     console.log('both email fields must match.')
        //     return
        // }

        // const newUser = { username, password, email }

        // fetch(`${'API path goes here'}/users`, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(newUser)
        // })
        //     .then(res => {
        //         if (!res.ok) {
        //             throw new Error('Something went wrong.')
        //         } return res.json();
        //     })
        //     .then(user => {

        //     })
        this.props.history.push('/login')
    }

    render() {
        return (
            <form action="submit" onSubmit={this.handleSubmit}>
                <fieldset className="registerForm">
                    <legend>New User Registration</legend>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" />
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" />
                    <label htmlFor="email">Repeat E-mail:</label>
                    <input type="text" name="remail" />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default Registration