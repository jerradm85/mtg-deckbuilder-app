import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'

class User extends React.Component {
    static contextType = Context;   
    render() {
        const decks = this.context.decks;
        return (
            <div>
                <Link to={`/create`}>Create Deck</Link>
                {decks.map(deck => {
                   return <li>
                        <Link to={`/deck/${deck.id}`}>{deck.title}</Link>
                    </li>
                })}
            </div>
        )
    }
}

export default User;