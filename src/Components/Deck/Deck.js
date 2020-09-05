import React from 'react'
import Context from '../../Context';
import { Link } from 'react-router-dom'

import './Deck.css'

class Deck extends React.Component {
    static contextType = Context;

    render() {
        const deck = this.context.decks[0];
        const cards = this.context.cards
        return (
            <div>
                <h3>{deck.title}</h3>
                {cards.map(card => {
                    return <li>
                        <Link to={`/card/${card.id}`}>{card.name}</Link>
                    </li>
                })}
                <Link to={`/user`}><button>Back</button></Link>
            </div>
        )
    }
}

export default Deck;