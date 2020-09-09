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
        e.preventDefault();
        const cardId = this.state.value;
        const card = this.context.cards.find(card => card.id == cardId)
        this.setState({
            cards: this.state.cards.concat(card)
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/user')
    }

    render() {
        const cards = this.context.cards;
        return (
            <div>
                <form className='createDeck' action="">
                    <fieldset>
                        <legend>Create new deck</legend>
                        <label>Name:</label>
                        <input></input>
                        <label>Cards:</label>
                        <select onChange={this.handleSelection} id='cardSelect'>
                            <option value="">Select a Card</option>
                            {cards.map(card => {
                                return <option key={card.id} value={card.id}>{card.name}</option>
                            })}
                        </select>
                        <button onClick={this.handleAddCard}>Add</button>
                        <label></label>
                        <textarea></textarea>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </fieldset>
                    {this.state.cards.map(card => 
                        <li>
                            {card.name}
                        </li>
                    )}
                </form>
                <Link to='/user'>Back</Link>
            </div>
        )
    }
}

export default CreateDeck;