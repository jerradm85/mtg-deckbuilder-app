import React from 'react'
import { Link } from 'react-router-dom'
import './CreateDeck.css'
import Context from '../../Context'
import DecksService from '../../services/decks-service'

class CreateDeck extends React.Component {
    static contextType = Context;
    state = {
        value: null,
        image: " ",
        cards: [],
        deckCards: [],
        error: null,
    }

    handleGetImage = (value, cards) => {
        const foundCard = cards.find(card => parseInt(card.id) === parseInt(value))
        const spreadCard = { ...foundCard };
        this.setState({
            image: spreadCard.image
        })
    }

    handleSelection = (e, cards) => {
        const card = e.target.value;
        this.handleGetImage(card, cards)
        this.setState({
            value: card
        })
    }

    handleAddCard = e => {
        e.preventDefault();
        const cardId = this.state.value;
        if (!cardId) {
            return
        }
        const card = this.context.cards.find(card => parseInt(card.id) === parseInt(cardId));
        console.log(card, cardId, this.state.cards)
        this.setState({
            cards: this.state.cards.concat(card),
            deckCards: this.state.deckCards.concat(card)
        }, () => {
            const cardsArr = this.state.cards
            const dCards = this.state.deckCards
            console.log(cardsArr, dCards)
        });
    }

    handleCreateDeck = e => {
        e.preventDefault();

        const name = e.target.deck_name.value;
        const cards = this.state.cards;
        const text = e.target.about_deck.value;

        if (!name || name.trim() === "") {
            this.setState({
                error: 'Deck must have a name.'
            })
            return
        }

        const deck = {
            name,
            cards,
            text
        }

        DecksService.postDeck(deck)
            .then(deck => {
                this.setState({
                    cards: []
                })
                this.props.history.push('/user')
            })
    }

    render() {
        const cards = this.context.cards;
        const error = this.state.error;
        return (
                <div className="create_container">
                    <form className="create_form" onSubmit={this.handleCreateDeck}>
                        <fieldset className="create_field">
                            <legend className="create_legend">Create a Deck</legend>
                            <label className="create_label">Name</label>
                            <input className="create_input" name="deck_name" required />
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <img className="create_card_image" src={this.state.image} alt="" />
                            <select id='cardSelect' className="create_card_select" onChange={(e) => this.handleSelection(e, cards)}>
                                <option>Select a card...</option>
                                {cards.map(card =>
                                    <option key={card.id} value={card.id}>{card.name}</option>
                                )}
                            </select>
                            <Link type="button" className="create_add_card glow-button" to="" onClick={this.handleAddCard}>Add</Link>
                            <ul className="create_list">
                                {this.state.cards.map(card =>
                                    <li>
                                        {card.name}
                                    </li>
                                )}
                            </ul>
                            <label className="create_label">Write about it</label>
                            <textarea className="text_area" name="about_deck"></textarea>
                            <div>
                                <button type="submit" className="create_button glow-button">Create</button>
                            </div>
                        </fieldset>
                        <Link className="create_back glow-button" to='/user'>Back</Link>
                    </form>
                </div>
        )
    }
}

export default CreateDeck;