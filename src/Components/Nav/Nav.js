import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

export default Nav;