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
                {deck.title}
                {cards.map(card => {
                    return <li>
                        <Link to={'/card/'}>{card.name}</Link>
                        {card.text}
                        <img src={card.image} />
                    </li>
                })}

            </div>
        )
    }
}

export default Deck;