import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'
import './User.css'

class User extends React.Component {
    static contextType = Context;

    handleDeleteDeck = (deck) => {
        // DeleteDeck function here.
    }


    render() {
        const decks = this.context.decks;
        return (
            <div className="user_decks_container">
                <Link className="create_deck" to={`/create`}>+Deck</Link>
                {decks.map(deck =>
                    <div className="deck" key={deck.id}>
                        <Link className="deck_name" to={`/deck/${deck.id}`}>{deck.title}</Link>
                        <Link className="edit_deck" to={`/update`}>Edit</Link>
                        <button className="deck_delete" onClick={this.handleDeleteDeck}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default User;