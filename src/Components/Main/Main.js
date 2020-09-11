import React from 'react'
import './Main.css'

import { Link } from 'react-router-dom'

class Main extends React.Component {
    render() {
        return (
            <div>
                <section className="about">
                    This is The About Section
                </section>
                <section className="example1">
                    This is the example section
                </section>
                <section className="example2">

                </section>
                <h3>Interested? Click below to sign up!</h3>
                <Link className="regbutton" to='/register'>Register</Link>
            </div>
        )
    }
}

export default Main;