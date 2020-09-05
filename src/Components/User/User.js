import React from 'react'
import Context from '../../Context'
import { Link } from 'react-router-dom'

class User extends React.Component {
    static contextType = Context;   
    render() {
        return (
            <div>
                {this.context.decks.map(deck => {
                   return <li>
                        <Link to={`/deck/${deck.id}`}>{deck.title}</Link>
                    </li>
                })}
            </div>
        )
    }
}

export default User;