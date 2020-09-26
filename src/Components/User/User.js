import React from 'react'
import Context from '../../Context'
import config from '../../config'
import { Link } from 'react-router-dom'
import DecksService from '../../services/decks-service'
import jwtService from '../../services/jwt-service'
import './User.css'

class User extends React.Component {
    static contextType = Context;


    componentDidMount() {
        // DecksService.getAllDecks()
        fetch(`${config.API_ENDPOINT}/decks`, {
            headers: {
                Authorization: `bearer ${jwtService.getToken()}`
            }
        })
            .then(res => res.json())
            .then(data => this.context.setDecks(data))
    }

    deleteDeck = (deckId) => {
        return DecksService.deleteDeck(deckId)
            .then(() => {
                this.context.deleteDeck(deckId);
                this.props.history.push("/user")
            })
    }

    render() {
        const decks = this.context.decks;
        return (
            <div>
                <div className="user_decks_container">
                    <Link className="create_deck glow-button" to={`/create`}>+ Deck</Link>
                    {decks.map(deck =>
                        <div className="deckTile" key={deck.id}>
                            <Link className="deck_name glow-button" to={`/deck/${deck.id}`}>{deck.name}</Link>
                            <Link className="edit_deck glow-button" to={`/user`}>Edit</Link>
                            <Link className="deck_delete glow-red" to="/user" onClick={() => this.deleteDeck(deck.id)}>Delete</Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default User;