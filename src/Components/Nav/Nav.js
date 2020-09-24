import React from 'react';
import Context from '../../Context'
import './Nav.css'

import { Link } from 'react-router-dom'
import jwtService from '../../services/jwt-service';

class Nav extends React.Component {
    static contextType = Context;

    handleLogout = () => {
        jwtService.clearToken();
        this.context.setUser(null);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="nav">
                {
                    this.context.user ? (<>
                        <button onClick={this.handleLogout}>Logout</button>
                    </>) : (<>
                        <Link to='/login'>Login</Link>
                        {' '}
                        <Link to='/register'>Register</Link>
                    </>)
                }
            </div>
        )
    }
}

export default Nav;