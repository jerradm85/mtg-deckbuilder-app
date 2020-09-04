import React from 'react'
import Context from '../../Context'

class Decks extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div>
                {
                    this.context.decks.map(deck => (
                      <li>
                          {deck.title}
                      </li>  
                    ))
                }
            </div>
        )
    }
}

export default Decks;