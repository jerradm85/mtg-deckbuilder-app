import React from 'react'
import Context from '../../Context';
import { Link } from 'react-router-dom'
import CardsService from '../../services/cards-service'
import './Deck.css'

class Deck extends React.Component {
    static contextType = Context;
    state = {
        cards: [],
    }

    componentDidMount() {
        CardsService.getDeckCards(this.props.match.params.deckId)
            .then(cards => this.setState({
                cards
            }))
    }

    render() {
        const deck = this.context.decks
            .find(deck =>
                parseInt(deck.id) === parseInt(this.props.match.params.deckId)) || {};
        return (
            <section className="page">
                <div className="deck_container">
                    <div className="deck_title">{deck.name}</div>
                    <ul className="list_cards">
                        {this.state.cards.map(card => {
                            return <li className="card" key={card.id}>
                                <Link
                                    className="card_title glow-button"
                                    key={card.id}
                                    to={`/card/${deck.id}/${card.id}`}>
                                    {card.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                    <div className="deck_about">About</div>
                    <div className="text_field">
                        {deck.text}
                    </div>
                </div>
                <Link className="deck_back glow-button" to={'/user'}>Back</Link>
            </section>
        )
    }
}

export default Deck;