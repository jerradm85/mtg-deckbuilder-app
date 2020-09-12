import React from 'react'
import Context from '../../Context';
import { Link } from 'react-router-dom'

import './Deck.css'

class Deck extends React.Component {
    static contextType = Context;

    render() {
        const deck = this.context.decks
            .find(deck => deck.id == this.props.match.params.deckId) || {};
        const cards = this.context.cards
        return (
            <div className="deck_container">
                <h3 className="deck_title">{deck.title}</h3>
                <ul>
                    {cards.map(card => {
                        return <li className="card" key={card.id}>
                            <Link to={`/card/${card.id}`}>{card.name}</Link>
                        </li>
                    })}
                </ul>
                <div className="about_deck">
                    "About Deck" goes here.
                </div>
                <Link className='back_button' to={`/user`}>Back</Link>
            </div>
        )
    }
}

export default Deck;