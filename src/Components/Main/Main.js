import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

class Main extends React.Component {
    render() {
        const image = `https://photos.google.com/album/AF1QipPYkeexqH8kScrj9f0mtcmwV3l_GsaXxa75eMZ4/photo/AF1QipOLr-7-UOI2ZblC7WPJIEmtY65v2xThKZWqfjit`;
        return (
            <div className="main_container">
                <section className="about">
                    <h2>Welcome to MTG Deckbuilder!</h2>
                    <p>
                        Magic: The Gathering is a collectible trading card strategy game. I have been playing for
                        many years, and wanted a place where I could build and maintain my decks. And so MTG Deckbuilder
                        was born. I made this app to be a companion to players who want the ability to conceptualize, build, 
                        and store decks, as well as write down notes on card combinations or themes that make the deck
                        powerful.
                    </p>
                </section>
                <section className="example">
                    <p>
                        After creating an account and logging in, you will be taken to your own homepage,
                        where you can click on "+ Deck" to create a new deck, or click on the logout button
                        to logout. At any time while logged in, you can click on "MTG Deckbuilder" to return 
                        to your homepage.

                    </p>
                    <img className="img1" src={require('./Screen1.png')} alt="" />
                </section>
                <section className="example">
                    <p>
                        This is the Create Deck page. Here you can name your creation, browse and add cards, and talk about what
                        makes your deck interesting, cool, or fun! finally, clicking on create will save your deck to your homepage for
                        later viewing.
                    </p>
                    <img className="img1" src={require('./Screen2.png')} alt="" />
                </section>
                <section className="example">
                    <p>
                        When you want to view your deck, simply click on it from the homepage, and it will
                        open the deck page for viewing. In the deck page, you can click on any card listed 
                        in the deck, which will bring that card up for viewing.
                    </p>
                    <img className="img1" src={require('./Screen3.png')} alt="" />
                </section>
                <section className="footer">
                    <div className="reg_footer">
                        <p>Interested? Click below to register!</p>
                        <Link className="regbutton glow-button" to='/register'>Register</Link>
                    </div>
                    <div className="login_footer">
                        <p>Already a member? Login!</p>
                        <p>Thinkful Grader? Login with User:Test Password:password</p>
                        <Link className="regbutton glow-button" to='/login'>Login</Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;