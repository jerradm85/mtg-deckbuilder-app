import config from '../config'
import jwtService from './jwt-service'

const DecksService = {
    getAllDecks() {
        return fetch(`${config.API_ENDPOINT}/decks`, {
            headers: {
                Authorization: `bearer ${jwtService.getToken()}`
            }
        })
            .then(res => res.json())
            .then(data => this.context.setDecks(data))
    },

    postDeck(deck) {
        return fetch(`${config.API_ENDPOINT}/decks`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${jwtService.getToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(deck)
        })
            .then(res => res.json())
    },

    deleteDeck(id) {
        return fetch(`${config.API_ENDPOINT}/decks/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${jwtService.getToken()}`,
            }
        })
    }
}

export default DecksService