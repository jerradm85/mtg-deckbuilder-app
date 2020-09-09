import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'

class User extends React.Component {
    static contextType = Context; 

    handleDeleteDeck = (deck) => {
        // DeleteDeck function here.
    }
    
    
    render() {
        const decks = this.context.decks;
        return (
            <div>
                <Link to={`/create`}>Create Deck</Link>
                {decks.map(deck => {
                   return <div className="Deck" key={deck.id}>
                       <Link to={`/deck/${deck.id}`}>{deck.title}</Link>
                        <Link to={`/update`}>Update Deck</Link>
                        <button onClick={this.handleDeleteDeck}>Delete</button>
                   </div>
                })}
            </div>
        )
    }
}

export default User;