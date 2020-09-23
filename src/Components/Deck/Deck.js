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
            .find(deck => parseInt(deck.id) === parseInt(this.props.match.params.deckId)) || {};
        return (
            <div className="deck_container">
                <h3 className="deck_title">{deck.name}</h3>
                <ul>
                    {this.state.cards.map(card => {
                        return <li className="card" key={card.id}>
                            <Link to={`/card/${deck.id}/${card.id}`}>{card.name}</Link>
                        </li>
                    })}
                </ul>
                <h3>About</h3>
                <div className="deck_summary">
                    {deck.text}
                </div>
                <Link className='back_button' to={`/user`}>Back</Link>
            </div>
        )
    }
}

export default Deck;