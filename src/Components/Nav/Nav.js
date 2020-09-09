import React from 'react';
import Context from '../../Context'
import './Nav.css'

import { Link } from 'react-router-dom'

class Nav extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className="Nav">
                {
                    this.context.user ? (<>
                        <Link to='/'>Logout</Link>
                    </>) : (<>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>)
                }
            </div>
        )
    }
}

export default Nav;