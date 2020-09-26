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
                        <Link className="home glow-button" to='/user'>MTG Deckbuilder</Link>
                        <Link className="logout glow-button" to="" onClick={this.handleLogout}>Logout</Link>
                    </>) : (<>
                        <Link className="login glow-button hidden" to='/login'>Login</Link>
                    </>)
                }
            </div>
        )
    }
}

export default Nav;