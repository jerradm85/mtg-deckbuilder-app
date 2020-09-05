import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'

class Card extends React.Component {
    static contextType = Context;

    findDeck = (context) => {
        const card = context.cards.find(card => parseInt(card.id) === parseInt(this.props.match.params.cardId)) || {}
        const deck = context.decks.find(deck => deck.id === card.deckId) || {}

        return deck
    }

    findCard(cards) {
        const deck = this.findDeck(this.context)
        const foundCard = cards.find(card => {
            if (this.props.match.params.cardId) {
                return (card.id === parseInt(this.props.match.params.cardId));
            } else return <></>
        }) || {}
        return (
            <div>
                <h2>{foundCard.name}</h2>
                <img src={foundCard.image} />
                <p>{foundCard.text}</p>
                <Link to={`/deck/${deck.id}`}><button>Back</button></Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.findCard(this.context.cards)}
            </div>
        )
    }
}

export default Card;