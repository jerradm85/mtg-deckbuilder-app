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
            <div>
                <h3>{deck.title}</h3>
                <div className="AboutDeck">
                    "About Deck" goes here.
                </div>
                {cards.map(card => {
                    return <div key={card.id}>
                        <Link to={`/card/${card.id}`}>{card.name}</Link>
                    </div>
                })}
                <Link className='BackButton' to={`/user`}>Back</Link>
            </div>
        )
    }
}

export default Deck;