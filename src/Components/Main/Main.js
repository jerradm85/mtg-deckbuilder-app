import React from 'react'
import './Main.css'

import { Link } from 'react-router-dom'

class Main extends React.Component {
    render() {
        const image = `https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png`;
        return (
            <div className="main_container">
                <section className="about">
                    <h2>Welcome to MTG Deckbuilder!</h2>
                    <p>
                    This app was designed to be a companion to users, allowing them to create decks,
                    customize them by adding cards, explain their strategies for play, and share decks 
                    created with other users.
                    </p>
                </section>
                <section className="example">
                    <img className="img" src={image} alt="" />
                    <h2>This is an example section</h2>
                </section>
                <section className="example">
                    <img className="img" src={image} alt="" />
                    <h2>This is an example section</h2>
                </section>
                <h2>Interested? Click below to sign up!</h2>
                <Link className="regbutton" to='/register'>Register</Link>
            </div>
        )
    }
}

export default Main;