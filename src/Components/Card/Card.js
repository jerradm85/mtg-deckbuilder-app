import React from 'react'
import Context from '../../Context'

class Card extends React.Component {
    static contextType = Context;

    findCard(cards) {
        const foundCard = cards.find((card) => {
            if (this.props.match.params.cardId) {
                return (card.id === parseInt(this.props.match.params.cardId));
            } else return <></>
        }) || {}
        console.log(foundCard)
        return (
            <div>
                <h2>{foundCard.name}</h2>
                <p>{foundCard.text}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.findCard(this.context.cards)}
            </div>
        )
    }
}

export default Card;