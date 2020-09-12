import React from 'react'
import { Link } from 'react-router-dom'
import './CreateDeck.css'
import Context from '../../Context'

class CreateDeck extends React.Component {
    static contextType = Context;
    state = {
        value: null,
        cards: []
    }

    handleSelection = e => {
        const card = e.target.value;
        this.setState({
            value: card
        });
    }

    handleAddCard = e => {
        e.preventDefault()
        const cardId = this.state.value;
        const card = this.context.cards.find(card => card.id == cardId)
        this.setState({
            cards: this.state.cards.concat(card)
        })
    }

    handleCreateDeck = e => {
        e.preventDefault();
        this.props.history.push('/user')
    }

    render() {
        const cards = this.context.cards;
        return (
            <div className="create_container">
                <form className="create_form">
                    <fieldset className="create_field">
                        <legend>Create new deck</legend>
                        <label>Name:</label>
                        <input className="form_input"></input>
                        <select id='cardSelect' className="card_select" onChange={this.handleSelection}>
                            <option value="">Select a card</option>
                            {cards.map(card => {
                                return <option key={card.id} value={card.id}>{card.name}</option>
                            })}
                        </select>
                        <button className="add_card" onClick={this.handleAddCard}>Add</button>
                        <label>Write about it:</label>
                        <ul>
                            {this.state.cards.map(card =>
                                <li className="create_list">
                                    {card.name}
                                </li>
                            )}
                        </ul>
                        <textarea className="text_area"></textarea>
                        <button className="create_button" onClick={this.handleCreateDeck}>Create</button>
                    </fieldset>
                </form>
                <Link to='/user'>Back</Link>
            </div>
        )
    }
}

export default CreateDeck;