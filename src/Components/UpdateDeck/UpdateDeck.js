import React from 'react'
import { Link } from 'react-router-dom'
import './UpdateDeck.css'
import Context from '../../Context'


class UpdateDeck extends React.Component {
    static contextType = Context;

    handleUpdateDeck = e => {
        e.preventDefault()
        // UpdateDeck function here

        this.props.history.push('/user')
    }

    handleAddCard = e => {
        e.preventDefault()

        // AddCard function here
    }

    render() {
        const cards = this.context.cards;
        return (
            <div>
                <form className="UpdateDeck" onSubmit={this.handleUpdateDeck}>
                    <fieldset>
                        <legend>Update your deck</legend>
                        <label>Name:</label>
                        <input></input>
                        <label>Cards:</label>
                        <select id='cardSelect'>
                        {cards.map(card => {
                                return <option key={card.id} value="">{card.name}</option>
                            })}
                        </select>
                        <button onClick={this.handleAddCard}>Add</button>
                        <label></label>
                        <textarea></textarea>
                        <button>Submit</button>
                    </fieldset>
                </form>
                <Link to={`/user`}>Back</Link>
            </div>
        )
    }
}

export default UpdateDeck;