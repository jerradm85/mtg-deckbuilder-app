import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'
import './Card.css'

class Card extends React.Component {
    static contextType = Context;

    static defaultProps = {
        match: {
            params: {}
        }
    }

    findDeck = (context) => {
        const card = context.cards.find(card => parseInt(card.id) === parseInt(this.props.match.params.cardId)) || {}
        const deck = context.decks.find(deck => deck.id === card.deck_id) || {}

        return deck
    }

    findCard(cards) {
        // const deck = this.findDeck(this.context)
        const foundCard = cards.find(card => {
            if (this.props.match.params.cardId) {
                return (card.id === parseInt(this.props.match.params.cardId));
            } else return <></>
        }) || {}
        return (
            <div className="card_container">
                <h2 className="card_name">{foundCard.name}</h2>
                <img className="card_img" src={foundCard.image} alt='foundCard' />
                <p className="card_text">{foundCard.text}</p>
                <Link className="back glow-button" to={`/deck/${this.props.match.params.deckId}`}>Back</Link>
            </div>
        )
    }

    render() {
        return this.findCard(this.context.cards)              
    }
}

export default Card;