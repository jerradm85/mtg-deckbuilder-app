import React from 'react'
import Context from '../../Context'
import config from '../../config'
import { Link } from 'react-router-dom'
import DecksService from '../../services/decks-service'
import jwtService from '../../services/jwt-service'
import './User.css'

import Nav from '../Nav/Nav'

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
            .then(deck => {
                this.setState({
                    decks: this.context.decks.filter(deck => deck.id !== parseInt(deckId))
                })
            })
    }

    render() {
        const decks = this.context.decks;
        return (
            <div className="user_decks_container">
                <Link className="create_deck" to={`/create`}>+ Deck</Link>
                {decks.map(deck =>
                    <div className="deckTile" key={deck.id}>
                        <Link className="deck_name" to={`/deck/${deck.id}`}>{deck.name}</Link>
                        <Link className="edit_deck" to={`/update`}>Edit</Link>
                        <button className="deck_delete" onClick={() => this.deleteDeck(deck.id)}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default User;